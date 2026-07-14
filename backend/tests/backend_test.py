"""Backend API tests for Mindful Prints"""
import os
import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://label-print-showcase.preview.emergentagent.com').rstrip('/')
API = f"{BASE_URL}/api"


@pytest.fixture
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


def test_root(client):
    r = client.get(f"{API}/")
    assert r.status_code == 200
    assert r.json() == {"message": "Mindful Prints API online"}


def test_create_quote_and_persist(client):
    payload = {
        "name": "TEST_John Doe",
        "company": "TEST_Acme",
        "email": "test_john@example.com",
        "phone": "+91 9999999999",
        "product_interest": "labels",
        "message": "TEST_Please send catalogue for pharma labels."
    }
    r = client.post(f"{API}/quote", json=payload)
    assert r.status_code == 201, r.text
    data = r.json()
    assert "id" in data and isinstance(data["id"], str)
    assert "created_at" in data
    assert data["name"] == payload["name"]
    assert data["email"] == payload["email"]
    assert data["product_interest"] == "labels"
    quote_id = data["id"]

    # GET verify persistence
    r2 = client.get(f"{API}/quote")
    assert r2.status_code == 200
    lst = r2.json()
    assert isinstance(lst, list)
    ids = [q["id"] for q in lst]
    assert quote_id in ids
    # No _id key exposed
    for q in lst:
        assert "_id" not in q
        assert isinstance(q["created_at"], str)


def test_quote_missing_required_fields(client):
    r = client.post(f"{API}/quote", json={"name": "x"})
    assert r.status_code == 422


def test_quote_invalid_email(client):
    payload = {
        "name": "TEST_X",
        "email": "not-an-email",
        "phone": "+9199999",
        "product_interest": "labels",
        "message": "hi"
    }
    r = client.post(f"{API}/quote", json=payload)
    assert r.status_code == 422


def test_quote_list_recent_first(client):
    r = client.get(f"{API}/quote")
    assert r.status_code == 200
    lst = r.json()
    if len(lst) >= 2:
        # created_at desc
        assert lst[0]["created_at"] >= lst[1]["created_at"]
