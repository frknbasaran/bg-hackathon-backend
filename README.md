# Seyahat Edenlere Sipariş Verme Uygulaması

Seyahat sırasında fazladan bagaj hakkı bulunan insanları, uygun şehir ve tarihte taşınması gereken paketi olan insanlarla buluşturup süreci kolaylaştıran uygulama.

## Web servisi çalıştırmak için

### Gerekli paketlerin yüklenmesi
```bash
$ npm install
```
### Dummy data oluşturmak için data üreteci
```bash
$ npm run generate
```
### Unit Testler
```bash
$ mocha
```
### Uygulamanın ayağa kaldırılması
```bash
$ npm start
```
Uygulama varsayılan olarak 80 numaralı porttan erişilebilir olacaktır. İlgili portu ```.env``` dosyasından değiştirebilirsiniz.

## Teknolojiler

|                |Teknoloji                          |Ek Bilgi                         |
|----------------|-------------------------------|-----------------------------|
|Sunucu| NodeJS, MongoDB            |Koa2, Node v8.4.0            |
|İstemci(iOS)          |Native iOS|Swift 4.0            |
|İstemci(Android)          |Native Android|Java 8|

## Uygulama Kapsamı

- Seyahat edenler ve paketi olan kullanıcıların birbirlerini görebilecekleri liste ekranı
- Uygun tarih, bagaj ölçüleri ve şehirler için filtreleme ekranı
- Paket sahibi ve taşıyıcı arasında onay sistemini sağlayacak ekranlar
- Taşıma işlemi sırasında paket sahibi için bir takip ekranı
- Süreç sonunda taşıyıcının teslim ettiği bilgisini girebileceği bir taşıma detay ekranı

> Bazı ekranlar ui/ux açısından yeniden değerlendirilip modala dönüştürülebilir.

## Ek Özellik

- Sürecin oluşturulması sırasında kullanıcı deneyiminin harita ile iyileştirilmesi

## Takım Üyeleri
Furkan Başaran - Backend Developer

Ömer Faruk Görmel - Android Developer

Ömer Kantar - iOS Developer
