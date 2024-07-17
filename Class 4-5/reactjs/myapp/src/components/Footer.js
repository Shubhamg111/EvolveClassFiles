import React from 'react'

const Footer = () => {
  return (
    <>
    <div class="containerfluid bg-dark px-5">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-secondary text-decoration-none lh-1">
      <i class='bx bxl-venmo'></i>
      </a>
      <span class="mb-3 mb-md-0 text-secondary">&copy; 2024 Company, Inc</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><a class="text-secondary" href="#"><i class='bx bxl-facebook-circle' ></i></a></li>
      <li class="ms-3"><a class="text-secondary" href="#"><i class='bx bxl-instagram-alt' ></i></a></li>
      <li class="ms-3"><a class="text-secondary" href="#"><i class='bx bxl-github' ></i></a></li>
    </ul>
  </footer>
</div>
      
    </>
  )
}

export default Footer
