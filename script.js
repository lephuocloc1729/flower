onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};
function redirect() {
  window.location.href = "index1.html"; // Replace 'second.html' with the path to your second HTML file
}
// Set timeout for 5 seconds
setTimeout(redirect, 10000); // 5000 milliseconds = 5 seconds
