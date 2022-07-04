window.onscroll = () => {
    const header = document.querySelector('#header_nb');
    if(this.scrollY <= 10) header.className = ''; 
    else header.className = 'scroll';
  };