const samplePage = document.querySelector('#option-01 .phone-content');
document.querySelectorAll('.variant-sample').forEach((content) => {
  content.append(...[...samplePage.childNodes].map((node) => node.cloneNode(true)));
});

document.querySelectorAll('[data-demo-action]').forEach((control) => {
  control.addEventListener('click', () => {
    const phone = control.closest('.phone');
    const feedback = phone.querySelector('.phone-feedback');
    const action = control.dataset.demoAction;

    if (control.closest('.nav-dock')) {
      phone.querySelectorAll('.nav-dock button').forEach((button) => button.classList.remove('is-current'));
      control.classList.add('is-current');
    }

    const result = action === 'Call us' ? 'No call was placed.' : action === 'Email us' ? 'No email was sent.' : 'No page will open.';
    feedback.textContent = `${action} — preview only. ${result}`;
    feedback.classList.add('is-visible');
    clearTimeout(phone.feedbackTimer);
    phone.feedbackTimer = setTimeout(() => feedback.classList.remove('is-visible'), 2600);
  });
});

function setContactChoices(root, open, moveFocus = false) {
  root.classList.toggle('is-open', open);
  const trigger = root.querySelector('[data-contact-reveal]');
  const choices = root.querySelector('[data-contact-choices]');
  trigger.setAttribute('aria-expanded', String(open));
  choices.setAttribute('aria-hidden', String(!open));
  choices.inert = !open;
  if (root.classList.contains('slide-contact')) {
    trigger.setAttribute('aria-label', open ? 'Close contact choices' : 'Open contact choices');
  }
  if (moveFocus) {
    (open ? choices.querySelector('button') : trigger).focus();
  }
}

document.querySelectorAll('[data-contact-reveal-root]').forEach((root) => {
  root.querySelector('[data-contact-choices]').inert = true;
  root.querySelector('[data-contact-reveal]').addEventListener('click', () => {
    setContactChoices(root, !root.classList.contains('is-open'), true);
  });
  root.closest('.phone').addEventListener('click', (event) => {
    if (root.classList.contains('is-open') && !root.contains(event.target)) {
      setContactChoices(root, false);
    }
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  document.querySelectorAll('[data-contact-reveal-root].is-open').forEach((root) => {
    setContactChoices(root, false, true);
  });
});

function closeEmailPreview(panel) {
  if (panel.hidden) return;
  const phone = panel.closest('.phone');
  const contact = phone.querySelector('[data-contact-reveal-root]');
  panel.hidden = true;
  phone.querySelector('.phone-content').inert = false;
  contact.inert = false;
  setContactChoices(contact, false);
  contact.querySelector('[data-contact-reveal]').focus({preventScroll: true});
}

document.querySelectorAll('[data-email-preview]').forEach((button) => {
  button.addEventListener('click', () => {
    const phone = button.closest('.phone');
    const panel = phone.querySelector('[data-email-panel]');
    panel.hidden = false;
    panel.querySelector('.email-preview__status').textContent = '';
    phone.querySelector('.phone-content').inert = true;
    phone.querySelector('[data-contact-reveal-root]').inert = true;
    // Focus the dialog itself so mobile keyboards and autofill do not appear until a field is chosen.
    panel.querySelector('[role="dialog"]').focus({preventScroll: true});
  });
});

document.querySelectorAll('[data-email-panel]').forEach((panel) => {
  panel.addEventListener('click', (event) => {
    if (event.target.closest('[data-email-close]')) closeEmailPreview(panel);
  });
  panel.querySelector('[data-preview-form]').addEventListener('submit', (event) => {
    event.preventDefault();
    panel.querySelector('.email-preview__status').textContent = 'Preview only — your message was not sent.';
  });
  panel.addEventListener('keydown', (event) => {
    if (event.key !== 'Tab') return;
    const focusable = [...panel.querySelectorAll('button,input,textarea')];
    const first = focusable[0];
    const last = focusable.at(-1);
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  const panel = document.querySelector('[data-email-panel]:not([hidden])');
  if (!panel) return;
  event.stopImmediatePropagation();
  closeEmailPreview(panel);
}, true);

document.querySelectorAll('[data-service-choice]').forEach((control) => {
  control.addEventListener('click', () => {
    const navigator = control.closest('.service-navigator');
    const choices = [...navigator.querySelectorAll('[data-service-choice]')];
    const selectedIndex = choices.indexOf(control);
    const service = control.dataset.serviceChoice;
    choices.forEach((choice) => {
      const selected = choice === control;
      choice.classList.toggle('is-selected', selected);
      choice.setAttribute('aria-pressed', String(selected));
    });
    navigator.querySelector('.service-count').textContent = `0${selectedIndex + 1} / 03`;
    navigator.querySelector('.service-progress span').style.width = `${(selectedIndex + 1) * 100 / 3}%`;
    const next = navigator.querySelector('.service-next');
    next.dataset.demoAction = `Explore ${service}`;
    next.innerHTML = `Explore ${service} <span aria-hidden="true">↗</span>`;
  });
});

document.querySelectorAll('[data-contact-mode]').forEach((control) => {
  control.addEventListener('click', () => {
    const switcher = control.closest('.contact-switch');
    const modes = [...switcher.querySelectorAll('[data-contact-mode]')];
    modes.forEach((mode) => {
      const selected = mode === control;
      mode.classList.toggle('is-selected', selected);
      mode.setAttribute('aria-pressed', String(selected));
    });
    switcher.querySelector('.switch-indicator').textContent = `0${modes.indexOf(control) + 1} / 02`;
    const action = switcher.querySelector('.switch-action');
    action.dataset.demoAction = control.dataset.contactMode;
    action.firstChild.textContent = `${control.dataset.contactMode} `;
  });
});

document.querySelectorAll('[data-route-choice]').forEach((control) => {
  control.addEventListener('click', () => {
    const dock = control.closest('.route-dock');
    dock.querySelectorAll('[data-route-choice]').forEach((choice) => {
      const selected = choice === control;
      choice.classList.toggle('is-current', selected);
      choice.setAttribute('aria-pressed', String(selected));
    });
  });
});

const contextCopy = {
  Services: { title: 'Find the right service.', action: 'Explore Services' },
  'Our Work': { title: 'See what we have built.', action: 'Explore Our Work' },
  Contact: { title: 'Tell us what is next.', action: 'Contact us' },
};
document.querySelectorAll('[data-context-choice]').forEach((control) => {
  control.addEventListener('click', () => {
    const dock = control.closest('.context-dock');
    dock.querySelectorAll('[data-context-choice]').forEach((choice) => {
      const selected = choice === control;
      choice.classList.toggle('is-selected', selected);
      choice.setAttribute('aria-pressed', String(selected));
    });
    const next = contextCopy[control.dataset.contextChoice];
    dock.querySelector('.context-title').textContent = next.title;
    const action = dock.querySelector('.context-go');
    action.dataset.demoAction = next.action;
    action.setAttribute('aria-label', `Preview ${next.action.toLowerCase()} action`);
  });
});
