'use strict';
document.getElementById('year').textContent = new Date().getFullYear();
const menu = document.querySelector('.menu-toggle');
const nav = document.getElementById('navlinks');
menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded','false'); }));

const form = document.getElementById('lead-form');
const submitButton = form.querySelector('button[type="submit"]');
const status = document.getElementById('form-status');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  if (form.elements._gotcha.value.trim()) return;
  submitButton.disabled = true;
  const originalLabel = submitButton.innerHTML;
  submitButton.textContent = 'Sending request…';
  status.textContent = '';
  status.className = 'form-status';
  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });
    if (!response.ok) throw new Error('Submission failed');
    form.reset();
    status.textContent = 'Thank you. Your consultation request has been sent. We will follow up by email.';
    status.classList.add('success');
  } catch (error) {
    status.textContent = 'We could not send your request. Please try again in a moment.';
    status.classList.add('error');
  } finally {
    submitButton.disabled = false;
    submitButton.innerHTML = originalLabel;
  }
});
