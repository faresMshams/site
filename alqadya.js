// عداد الوقت للقضية
const startTime = new Date('2022-01-01T00:00:00'); // تاريخ بداية القضية
const timerElement = document.getElementById('timer');

function updateTimer() {
    const now = new Date();
    const timeDiff = now - matchDate;

    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);

    const remainingDays = days % 7;

    // تحديث النص ليظهر الرقم على اليمين والكلمات على اليسار
    countdown.innerHTML = `${weeks} <span>جمعة</span>، ${remainingDays} <span>يوم</span>، ${hours % 24} <span>ساعة</span>، ${minutes % 60} <span>دقيقة</span>، ${seconds % 60} <span>ثانية</span>`;
}
// تحديث العداد كل ثانية
setInterval(updateTimer, 1000);
