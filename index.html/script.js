// 导航高亮：根据当前页面URL匹配
document.addEventListener("DOMContentLoaded", function () {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });

  // 回到顶部按钮功能
  const backToTopBtn = document.createElement("div");
  backToTopBtn.className = "back-to-top";
  backToTopBtn.innerHTML = "↑";
  document.body.appendChild(backToTopBtn);

  // 滚动时显示/隐藏按钮
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) { // 滚动超过300px显示
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  // 点击回到顶部
  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});