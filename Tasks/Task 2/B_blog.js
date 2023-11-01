

document.addEventListener("DOMContentLoaded", function () {
    const blogs = document.getElementById("blogs");
    const addBlogButton = document.getElementById("addBlog");
    const modal = document.getElementById("modal");
    const closeBtn = document.querySelector(".close");
    const blogForm = document.getElementById("blogForm");

    let storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];

    function displayBlogs() {
        blogs.innerHTML = "";
        storedBlogs.forEach(function (blog, index) {
            const blogDiv = document.createElement("div");
            blogDiv.classList.add("blog-item");
            
            const currentDate = new Date();
            const dateString = currentDate.toDateString();
            
            blogDiv.innerHTML = `
                <h2>${blog.title}</h2>
                <p>${blog.content}</p>
                <p>Posted on: ${blog.date}</p>
                <button class="delete-button" data-index="${index}">Delete</button>
            `;
            blogs.appendChild(blogDiv);
        });

        const deleteButtons = document.querySelectorAll(".delete-button");
        deleteButtons.forEach((button) => {
            button.addEventListener("click", function () {
                const index = button.getAttribute("data-index");
                storedBlogs.splice(index, 1);
                localStorage.setItem("blogs", JSON.stringify(storedBlogs));
                displayBlogs();
            });
        });
    }

    displayBlogs();

    addBlogButton.addEventListener("click", function () {
        modal.style.display = "block";
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    blogForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const title = document.getElementById("title").value;
        const content = document.getElementById("content").value;
        if (title && content) {
            // Get the current date and time
            const currentDate = new Date();
            const dateString = currentDate.toDateString();
            
            storedBlogs.push({ title, content, date: dateString });
            localStorage.setItem("blogs", JSON.stringify(storedBlogs));
            displayBlogs();
            blogForm.reset();
            modal.style.display = "none";
        }
    });
});



