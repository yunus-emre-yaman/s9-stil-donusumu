# Stil Dönüşümü

Çalıştığın şirkette güvenlik açığı bulunan kütüphaneler yenileri ile değiştirilmeye başlanmıştı.
Hazır projeler elden geçirilirken, "modern kütüphaneler ile yenileme çalışmaları" yeni sprint hedefi olarak belirlendi.

Bu kapsamda senden projede `date-fns` ve `tailwindcss` kütüphanelerini eklemeni ve kullanmaya başlamanı istiyorlar.

## Amaç

1. `TailwindCSS` ve `date-fns` kütüphanelerini projeye eklemek.
2. `Task` componentında kullanılan stilleri `App.css` dosyasından bakarak `TailwindCSS` classları kullanarak yeniden yazmak.
   - Eğer istediğin değeri sağlayan öntanımlı bir class yoksa, stil değerini **arbitrary value** olarak yazabilirsin, mesela bg-[#ccc]
   - İhtiyaç kalmadığında `App.css` içindeki satırları sil.
3. `urgent` ve `normal` classlarındaki renkleri `@theme` kullanarak `index.css` içine **aynı isimlerle** eklemek.

4. Task deadlinelarını `date-fns` kütüphanesindeki metodlar yardımıyla "1 gün sonra", "4 gün kaldı" gibi metin halinde yazmak.
   - Deadline'a 3 günden az kaldı ise, deadline metninin fon rengi "urgent", 3 günden fazla var ise "normal" ile temsil edilen renk olmalı.
   - Bunu arbitrary value olarak değil, TailwindCSS yardımcı classı olarak kullanmalısın.

- İpucu: dokümantasyonda `Adding custom styles` bölümüne bakabilirsin.
- İpucu: `formatDistanceToNow` ve `differenceInDays` metodları işine yarayabilir.
- Çalışma dosyaların: `src/index.css`, `src/components/Task.jsx`.
- Unutma, takıldığın yerlerde terminaldeki test mesajlarında ipuçları bulabilirsin.

## 🔧 VS Code Hazırlığı

### Tailwind CSS IntelliSense Eklentisi (Zorunlu)

Tailwind CSS IntelliSense, Tailwind sınıflarını yazarken otomatik tamamlama, sınıf doğrulama ve class dokümantasyonu gibi özellikler sunar. Bu sayede hem daha hızlı hem de daha hatasız şekilde stil yazabilirsiniz.

**Kurulum:**

1. VS Code'da sol paneldeki **Extensions** (📦) simgesine tıklayın
2. Arama kutusuna `Tailwind CSS IntelliSense` yazın
3. **Tailwind Labs** tarafından sunulan eklentiyi bulun
4. **Install** butonuna tıklayın

**Not:** Projenizde `tailwind.config.js` veya `tailwind.config.ts` dosyası bulunmalıdır. Bu dosya olmadan eklenti tam olarak çalışmayabilir.

## 🚀 Projeye Başlama

### Adım 1: Projeyi Kendi Hesabınıza Kopyalayın

1. Bu sayfanın sağ üst köşesindeki **Fork** butonuna tıklayın
2. Kendi GitHub hesabınızda proje kopyası oluşacak

### Adım 2: Projeyi Bilgisayarınıza İndirin

Görseldeki adımları takip edin ya da terminali kullanabilirsiniz.

```bash
git clone [buraya-kendi-fork-linkinizi-yazın]
cd [proje-klasor-adi]
```

### Adım 3: Gerekli Kurulumları Yapın

Terminal açın ve sırasıyla şu komutları çalıştırın:

```bash
npm install
npm run c2w
```

> **💡 İpucu:** Bu komutlar gerekli paketleri yükler ve test sistemini başlatır.

### Adım 4: Projeyi Çalıştırın ve Browserda Görüntüleyin

Yeni bir terminal tabı açın ve şu komutu çalıştırın:

```bash
npm run dev
```

Bu komut projeyi çalıştıracak ve bir link verecek. Bu linki browserda açın ve yazdıklarınızın çıktısını gözlemleyin.

## 📝 Geliştirme Süreci

### 0. Öğrenci numaranızı `student_id.txt` dosyasına yazın 

### 1. Testleri Takip Edin

- Testlerin çalıştığı trminali açık tutun ve test çıktılarını izleyin
- Başarılı testler ✅, başarısız testler ❌ ile gösterilir

### 2. Adım Adım İlerleyin

- Her küçük ilerleme sonrası değişiklikleri kaydedin
- Testlerin durumunu kontrol edin
- Bir özelliği tamamen bitirdikten sonra commit yapın

### 3. Düzenli Commit Yapın

GitHub Desktop uygulamasını kullanarak ilerlemenizi sıklıkla GitHub'a gönderin.
Ya da terminali kullanabilirsiniz:

```bash
git add .
git commit -m "Anlamlı bir commit mesajı"
git push origin main
```

## 🧪 Otomatik Değerlendirme Sistemi

Bu proje otomatik test sistemi ile gelir. Test sonuçları terminal penceresinde görünür. Kırmızı (❌) testleri yeşile (✅) çevirmeye odaklanın.

## 🆘 Sorun Giderme

### Yaygın Sorunlar:

- **npm komutları çalışmıyor:** Node.js kurulu olduğundan emin olun
- **Testler çalışmıyor:** Terminal penceresini kapatıp `npm run c2w` komutunu tekrar çalıştırın

### Yardım İçin:

1. Terminal hatasını tam olarak okuyun
2. Dosya yollarının doğru olduğunu kontrol edin
3. Değişiklikleri kaydettiğinizden emin olun

## 📋 Çalışma Akışı Özeti

1. ✅ Projeyi fork edin ve clone edin
2. ✅ `npm install` ve `npm run c2w` çalıştırın
3. ✅ `npm run dev` ile projeyi çalıştırın ve size verdiği linki açarak yaptıklarınızı takip edin
4. ✅ Terminal'den test sonuçlarını takip edin
5. ✅ Düzenli olarak commit yapın
6. ✅ İlerleyişinizi GitHub'a push edin

**İyi çalışmalar! 🎨✨**
