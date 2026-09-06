console.log("JS is ready");

document.getElementById("contact").onclick = function() {
    alert("ยังไม่มีครับทำไม่ทัน");
};

function checkPassword() {
        // แก้ไข: เอาเครื่องหมาย = ออกหลัง getElementById
        let password = document.getElementById("password").value;
        const overlay = document.getElementById("overlay");
        const mainpage = document.getElementById("mainpage");
        let correctPassword = "โอม1234";

        if (password == correctPassword) {
          overlay.style.display = "none";
        } else {
          alert("กระโดดตีลังกาก่อนเด่วผมบอก อิอิ"); // เพิ่มเติม: แจ้งเตือนเมื่อกรอกผิด
        }
      }

