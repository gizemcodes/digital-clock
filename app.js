//saatin görüntüleneceği html elementi seçilir.
const clock = document.getElementById(`clock`);

//saatin her saniye güncellenmesi için fonksiyon tanımlıyoruz.
function updateClock (){
    const now = new Date(); //şu anki tarih ve saat bilgisi alınıyor. 

//saat, dakika ve saniyeyi ayrı ayrı alıyoruz.
const hours = now.getHours().toString().padStart(2, '0'); //saat bilgisi, 2 basamaklı
const minutes = now.getMinutes().toString().padStart(2, '0'); //dakika bilgisi, 2 basamaklı
const seconds = now.getSeconds().toString().padStart(2, '0'); //saniye bilgisi, 2 basamaklı}

//saatin formatlanmış hali oluşturuluyor
clock.textContent = `${hours}:${minutes}:${seconds}`;
}



//`setInterval`fonksiyonu updateClock'u her saniye çağırıyor.
setInterval(updateClock, 1000);

//sayfa yüklendiğinde saatin hemen gösterilmesi için fonksiyonu bir kere çağırıyoruz.
updateClock();


