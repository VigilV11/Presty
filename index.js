const allBtns = document.querySelectorAll('.btn');

allBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    // to prevent anchor tag's href from jumping to the section immediately
    e.preventDefault();

    // get the button (even if you click on the i tag)
    const btnElement = e.target.closest('.btn');

    document
      .querySelector(btnElement.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});
