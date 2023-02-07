const observer = new MutationObserver(() => {
    // Select the recommended section on the page
    const recommendedSection = document.querySelector("#secondary.style-scope.ytd-watch-flexy");
  
    // If the recommended section exists, apply a blur filter to the 
    // recommended section
    if (recommendedSection) {
      recommendedSection.style.filter = "blur(30px)";
  
      // When the mouse is over the recommended section, remove the blur filter
      recommendedSection.addEventListener("mouseover", () => {
        recommendedSection.style.filter = "none";
      });

     //   If you want to add a timer before it unblurs, uncomment this.
     //   let timer;
     //   recommendedSection.addEventListener("mouseover", () => {
     //     timer = setTimeout(() => {
     //         recommendedSection.style.filter = "none"
     //     }, 5000);
     //   });
  
      // When the mouse leaves the recommended section, re-apply the blur filter
      recommendedSection.addEventListener("mouseout", () => {
        recommendedSection.style.filter = "blur(30px)";
      });
  
      // Disconnect the observer so it doesn't run again
      observer.disconnect();
    }
  });
  
  // Observe changes to the body element and its children
  observer.observe(document.body, { childList: true, subtree: true });