window.addEventListener("load", function() {
  var loadingPage = document.getElementById("loading-page");
  var content = document.getElementById("content");

  // 로딩이 끝난 후에 로딩 페이지를 5초 동안 표시합니다.
  loadingPage.style.display = "block";
  content.style.display = "none";

  setTimeout(function() {
    loadingPage.style.opacity = 0;

    setTimeout(function() {
      loadingPage.style.display = "none";
      loadingPage.style.opacity = 1; // 초기 상태로 되돌림
      content.style.display = "block";
    }, 1500); // 페이드아웃 후 1.5초 후에 로딩 페이지 완전히 숨김
  }, 10000); // 로딩 페이지를 5초 동안 표시

  // 브라우저를 닫을 때 로딩 페이지가 다시 나타나지 않도록 합니다.
  window.addEventListener("beforeunload", function() {
    loadingPage.style.display = "none";
  });
});
// loading page end

//drag boxes

// JavaScript 코드
document.addEventListener('mousedown', function(event) {
  event.preventDefault(); // 기본 드래그 이벤트를 막음
});


window.addEventListener('DOMContentLoaded', () => {
  const box1 = document.getElementById('box-1');
  const box2 = document.getElementById('box-2-2');
  const box3 = document.getElementById('box-3');

  // 초기 위치 설정
  box1.style.top = '33vh';
  box1.style.left = '0';

  box2.style.paddingRight = '3vw';
  box2.style.top = '33vh';
  box2.style.left = '260px';

  box3.style.top = '60vh';
  box3.style.left = '435px';

  const boxes = [box1, box2, box3];
  let activeBox = null;
  let offsetX = 0;
  let offsetY = 0;

  window.addEventListener('mousedown', startDragging);
  window.addEventListener('mouseup', stopDragging);
  window.addEventListener('mouseleave', stopDragging);
  window.addEventListener('mousemove', drag);

  function startDragging(e) {
    const target = e.target;
    activeBox = boxes.find(box => box.contains(target));
    if (activeBox) {
      offsetX = e.clientX - activeBox.offsetLeft;
      offsetY = e.clientY - activeBox.offsetTop;
      activeBox.style.zIndex = '9999'; // 최상위 레이어로 설정
      e.stopPropagation(); // 이벤트 전파 중지
    }
  }

  function stopDragging() {
    if (activeBox) {
      activeBox.style.zIndex = ''; // 원래 레이어 순서로 복원
      activeBox = null;
    }
  }

  function drag(e) {
    if (activeBox) {
      const x = e.clientX - offsetX;
      const y = e.clientY - offsetY;

      activeBox.style.top = `${y}px`;
      activeBox.style.left = `${x}px`;
    }
  }
});


//end boxes

window.addEventListener('DOMContentLoaded', () => {
  const imageContainer = document.getElementById('image-container');
  const draggableImage = document.getElementById('image-container');
  const removeButton = document.getElementById('remove-button');

  // Set random position for the image
  const imageWidth = draggableImage.offsetWidth;
  const imageHeight = draggableImage.offsetHeight;
  const randomX = Math.floor(Math.random() * (window.innerWidth - imageWidth));
  const randomY = Math.floor(Math.random() * (window.innerHeight - imageHeight));
  
  // Ensure the image remains within the window boundaries
  const maxX = window.innerWidth - imageWidth;
  const maxY = window.innerHeight - imageHeight;
  const initialX = Math.max(0, Math.min(randomX, maxX));
  const initialY = Math.max(0, Math.min(randomY, maxY));
  
  draggableImage.style.left = `${initialX}px`;
  draggableImage.style.top = `${initialY}px`;

  // Make the image draggable
  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  draggableImage.addEventListener('mousedown', (event) => {
    isDragging = true;
    offsetX = event.clientX - draggableImage.getBoundingClientRect().left;
    offsetY = event.clientY - draggableImage.getBoundingClientRect().top;
  });

  window.addEventListener('mousemove', (event) => {
    if (isDragging) {
      const x = event.clientX - offsetX;
      const y = event.clientY - offsetY;
      draggableImage.style.left = `${x}px`;
      draggableImage.style.top = `${y}px`;
    }
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Remove the image when the remove button is clicked
  removeButton.addEventListener('click', () => {
    imageContainer.remove();
  });
});
