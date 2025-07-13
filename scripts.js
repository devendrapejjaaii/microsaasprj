document.getElementById('billingForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const form = e.target;
  const data = {
    tenant_id: form.tenant_id.value,
    client_id: form.client_id.value,
    client_secret: form.client_secret.value,
    subscription_id: form.subscription_id.value
  };

  try {
    const response = await fetch("http://localhost:8000/get-billing", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    document.getElementById('output').textContent = JSON.stringify(result, null, 2);
  } catch (err) {
    document.getElementById('output').textContent = "Error: " + err.message;
  }
});