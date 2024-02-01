/*
The MIT License (MIT)

Github: https://github.com/gsavio

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var zenoid = 'r4mpcrfwfzzuv'

window.onload = function () {
    var page = new Page;
    page.changeTitlePage();
    page.setVolume();

    var player = new Player();
    player.play();

    getStreamingData();
    // Interval to get streaming data in miliseconds
    setInterval(function () {
        getStreamingData();
    }, 10000);

    var coverArt = document.getElementsByClassName('cover-album')[0];

    coverArt.style.height = coverArt.offsetWidth + 'px';
}

// DOM control
function Page() {
    this.changeTitlePage = function (title = RADIO_NAME) {
        document.title = title;
    };

    this.refreshCurrentSong = function (song, artist) {
        var currentSong = document.getElementById('currentSong');
        var currentArtist = document.getElementById('currentArtist');

        if (song !== currentSong.innerHTML) {
            // Animate transition
            currentSong.className = 'animated flipInY text-uppercase';
            currentSong.innerHTML = song;

            currentArtist.className = 'animated flipInY text-capitalize';
            currentArtist.innerHTML = artist;

            // Refresh modal title
            document.getElementById('lyricsSong').innerHTML = song + ' - ' + artist;

            // Remove animation classes
            setTimeout(function () {
                currentSong.className = 'text-uppercase';
                currentArtist.className = 'text-capitalize';
            }, 2000);
        }
    }

    this.refreshHistoric = function (info, n) {
        var $historicDiv = document.querySelectorAll('#historicSong article');
        var $songName = document.querySelectorAll('#historicSong article .music-info .song');
        var $artistName = document.querySelectorAll('#historicSong article .music-info .artist');

        // Defining Track Backgrounds - Above
        const JINGLESETELAHIKLAN = "https://cdn.bintangtenggarafm.com/img/dbwvp4y.png";
        const Cbreak = "https://thumbs2.imgbox.com/f5/eb/S6wD0BK6_t.jpg";
        const RadioBintangTenggara = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLSPAs-qRbddzeii-poy3k5Tsz26fYDw8AFeK04iNOxM1HCD6zMOmi5i9bhK6FBGDree32YzCUhiThpyFYr5Cd9A4yiHlOH9MnYPlH3psMW_zzRL0I6yCuMuAA1RvFfGSJEsY0UY3kQjG8xUDSarEVEWBdFS046suoDe25Ar0K8izBvMwrJIZl-aJ_U_1I/s1600/fF8yUE0.png";
        const SolusiSehat ="https://thumbs2.imgbox.com/f8/ca/GwuLQxLZ_t.jpg";
        const TANDAWAKTUSHOLATDHUHUR = "https://thumbs2.imgbox.com/d1/20/NYuawDvh_t.jpg";
        const jingle = "https://thumbs2.imgbox.com/9f/91/Dlzeilaz_t.jpg";
        const JELAJAHDESA = "https://thumbs2.imgbox.com/7e/dc/vOGdajpd_t.jpg";
        const TS = "https://i.imgur.com/P8KFcGD.png";
        const ADZANMAGHRIB = "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/c1/59/25/c15925c6-d225-d3fb-aba2-29f36a67dd57/717124148517.png/512x512bb.png";
        const LylaBand = "https://2.bp.blogspot.com/_RgDaNmR-Ot8/Scs48y51rpI/AAAAAAAAATk/fvRR3DzK6u8/w1200-h630-p-k-no-nu/lyla3.jpg";
        const WISATABUDAYA = "https://thumbs2.imgbox.com/c9/6a/Q06BTH52_t.jpg";
        const NickyAstria = 'https://i.scdn.co/image/ab67616d0000b27313b9a54f0dfb36647b954b95';
        const LAGUPENUTUPRADIO = 'https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/ec/3f/64/ec3f643b-0ffd-eb61-9ccf-c8d2c027594f/3ad3589a-548e-4b13-970c-83a2937c7d5c.jpg/500x500bb.jpg';
        const RENDRAPRASETYO = 'https://live.staticflickr.com/65535/53455348976_e4bc1d6d8c_z.jpg';
        const RONI = 'https://live.staticflickr.com/65535/53454432287_67f8f2c3a7_n.jpg';
        const Silvi = 'https://live.staticflickr.com/65535/53455363926_67074fffcc_z.jpg';
        const NURUL = 'https://live.staticflickr.com/65535/53455379586_f43d29dc84_n.jpg';
        const ANITA = 'https://live.staticflickr.com/65535/53455501068_3bff1d7b45.jpg';
        const Dengarkami = 'https://deow9bq0xqvbj.cloudfront.net/image-logo/937464/listen-to-me_300x300.jpg';
        const BintangTenggara = 'https://thumbs2.imgbox.com/f5/64/PLw7SiIT_t.jpg';
        const Tito = 'https://i.scdn.co/image/ab67616d0000b273bb18c21272e15fa7f601eea0';
        const ASHAR = 'https://thumbs2.imgbox.com/99/21/uJr1nZIi_t.png';
        const Citizen = 'https://thumbs2.imgbox.com/b1/29/LxXCnvNr_t.jpg';
        const OpeningRadio = 'https://i.imgur.com/UJpQBhz.jpg';
        const RAYE = 'https://i1.sndcdn.com/artworks-XnuuNNSePazLtEnO-dhrBrQ-t500x500.jpg';
        const REGARD = 'img/izveduvaci/REGARD.jpeg';
        const VASILG = 'img/izveduvaci/VASILG.jpg';
        const SLATKARISTIKA = 'img/izveduvaci/SLATKARISTIKA.jpg';
        const ALEKSANDARM = 'img/izveduvaci/ALEKSANDARM.jpg';
        const DZAFER = 'img/izveduvaci/DZAFER.jpg';
        const BOJS = 'img/izveduvaci/BOJS.jpg';
        const MIJ = 'img/izveduvaci/MIJ.jpg';
        const MAJAO = 'img/izveduvaci/MAJAO.jpg';
        const MAGIJA = 'img/izveduvaci/MAGIJA.jpg';
        const TOSE = 'img/izveduvaci/TOSE.jpg';
        const MARIJAN = 'img/izveduvaci/MARIJAN.jpg';
        const KALIOPI = 'img/izveduvaci/KALIOPI.jpg';
        const ERZANA = 'img/izveduvaci/ERZANA.jpg';
        const TRAJCE = 'img/izveduvaci/TRAJCE.jpg';
        const DZOKSI = 'img/izveduvaci/DZOKSI.jpg';
        const AREA = 'img/izveduvaci/AREA.jpg';
        const NOVIDECKI = 'img/izveduvaci/NOVIDECKI.jpg';
        const NOKAUNT = 'img/izveduvaci/NOKAUNT.jpeg';
        const EROS = 'img/izveduvaci/EROS.jpg';
        const JAX = 'img/izveduvaci/JAX.jpg';
        const REBEKA = 'img/izveduvaci/REBEKA.jpg';
        const KUKULELE = 'img/izveduvaci/KUKULELE.jpg';
        const IGOR = 'img/izveduvaci/IGOR.jpg';
        const DANI = 'img/izveduvaci/DANI.jpg';
        const BTS = 'https://live.staticflickr.com/65535/53459011184_1df18fcc82_b.jpg';
        const MAGDALENAC = 'img/izveduvaci/MAGDALENAC.png';
        const ELENAR = 'img/izveduvaci/ELENAR.jpg';
        const LAMBE = 'img/izveduvaci/LABME.jpg';
        const VLATKOL = 'img/izveduvaci/VLATKOL.jpg';
        const JOVANJOVANOV = 'img/izveduvaci/JOVANJOVANOV.jpg';
        const SKIPIITYZEE = 'img/izveduvaci/SKIPIITYZEE.jpeg';
        const KAROLINA = 'img/izveduvaci/KAROLINA.jpg';
        const DULEKOKI = 'img/izveduvaci/DULEKOKI.jpg';
        const TYZEE = 'img/izveduvaci/TYZEE.jpg';
        const DIMITAR = 'img/izveduvaci/DIMITAR.jpeg';
        const ELENAM = 'img/izveduvaci/ELENAM.jpg';
        const VIKTORIJA = 'img/izveduvaci/VIKTORJALOBA.jpg';
        const VRCAK = 'img/izveduvaci/VRCAK.jpg';
        const NEXTTIME = 'img/izveduvaci/NEXTTIME.jpg';
        const MEKIC = 'img/izveduvaci/MEKIC.jpg';
        const VUCICM = 'img/izveduvaci/VUCICM.jpg';
        const BIBA = 'img/izvedvaci/BIBADODEVA.jpg';
        const VERICA = 'img/izveduvaci/VERICA.jpg';
        const ALEKSANDARJ = 'img/izveduvaci/ALEKSANDARJ.jpg';
        const EYECUE = 'img/izveduvaci/EYECUE.jpg';
        const NATASA = 'img/izveduvaci/NATASA.jpg';
        const MARTIJASTANOJKOVIK = 'img/izveduvaci/MARTIJASTANOJKOVIK.jpg';
        const SIMONA = 'img/izveduvaci/SIMONA.jpg';
        const ROBERT = 'img/izveduvaci/ROBERT.jpeg';
        const DSCOLLECTIVE = 'img/izveduvaci/DSCOLLECTIVE.jpg';
        const MIKE = 'img/izveduvaci/TributeMikeOldfield.jpg';
        const MARSHMELLO = 'img/izveduvaci/MARSHMELLO.jpg';
        const JASONDERULO = 'img/izveduvaci/JASONDERULO.jpg';
        const RUDIMENTAL = 'img/izveduvaci/RUDIMENTAL.jpg';
        const Suliyana = 'img/izveduvaci/DAFTPUNK.jpg';

        var artistRadio = info.artist.replace(/&apos;/g, '\'');
        if (artistRadio == 'JINGLE SETELAH IKLAN') {
            var urlCoverArt = JINGLESETELAHIKLAN;
        }
        else if (artistRadio == 'Commercial Break'){
            var urlCoverArt = Cbreak;
        }
        else if (artistRadio == 'Radio Bintang Tenggara'){
            var urlCoverArt = RadioBintangTenggara;
        }
        else if (artistRadio == 'Solusi Sehat'){
            var urlCoverArt = SolusiSehat;
        }
        else if (artistRadio == 'TANDA WAKTU SHOLAT DHUHUR'){
            var urlCoverArt = TANDAWAKTUSHOLATDHUHUR;
        }
        else if (artistRadio == "JINGLE"){
            var urlCoverArt = jingle;
        }
        else if (artistRadio == 'JELAJAH DESA'){
            var urlCoverArt = JELAJAHDESA;
        }
        else if (artistRadio == 'TS'){
            var urlCoverArt = TS;
        }
        else if (artistRadio == 'ADZAN MAGHRIB'){
            var urlCoverArt = ADZANMAGHRIB;
        }
        else if (artistRadio == 'Lyla Band'){
            var urlCoverArt = LylaBand;
        }
        else if (artistRadio == 'Wisata Budaya'){
            var urlCoverArt = WISATABUDAYA;
        }
        else if (artistRadio == 'Nicky Astria'){
            var urlCoverArt = NickyAstria;
        }
        else if (artistRadio == 'LAGU PENUTUP RADIO'){
            var urlCoverArt = LAGUPENUTUPRADIO;
        }
        else if (artistRadio == 'RENDRA PRASETYO'){
            var urlCoverArt = RENDRAPRASETYO;
        }
        else if (artistRadio == 'RONI SANTOSO'){
            var urlCoverArt = RONI;
        }
        else if (artistRadio == 'Silvi Muhtarom'){
            var urlCoverArt = Silvi;
        }
        else if (artistRadio == 'NURUL HIDAYAH'){
            var urlCoverArt = NURUL;
        }
        else if (artistRadio == 'ANITA SUMARDI'){
            var urlCoverArt = ANITA;
        }
        else if (artistRadio == 'DENGAR KAMI'){
            var urlCoverArt = Dengarkami;
        }
        else if (artistRadio == 'Bintang Tenggara'){
            var urlCoverArt = BintangTenggara;
        }
        else if (artistRadio == 'Tito'){
            var urlCoverArt = Tito;
        }
        else if (artistRadio == 'TANDA WAKTU SHOLAT ASHAR'){
            var urlCoverArt = ASHAR;
        }
        else if (artistRadio == 'Citizen Journalism'){
            var urlCoverArt = Citizen;
        }
        else if (artistRadio == 'Opening Radio'){
            var urlCoverArt = OpeningRadio;
        }
        else if (artistRadio == 'RAYE Ft 070 Shake'){
            var urlCoverArt = RAYE;
        }
        else if (artistRadio == 'KAROLINA'){
            var urlCoverArt = KAROLINA;
        }
        else if (artistRadio == 'SKIPI I TYZEE'){
            var urlCoverArt = SKIPIITYZEE;
        }
        else if (artistRadio == 'JOVAN JOVANOV'){
            var urlCoverArt = JOVANJOVANOV;
        }
        else if (artistRadio == 'VLATKO LOZANOVSKI'){
            var urlCoverArt = VLATKOL;
        }
        else if (artistRadio == 'LAMBE I LJUPKA'){
            var urlCoverArt = LAMBE;
        }
        else if (artistRadio == 'LAMBE ALABAKOVSKI'){
            var urlCoverArt = LAMBE;
        }
        else if (artistRadio == 'LAMBE'){
            var urlCoverArt = LAMBE;
        }
        else if (artistRadio == 'ELENA RISTESKA'){
            var urlCoverArt = ELENAR;
        }
        else if (artistRadio == 'MAGDALENA CVETKOSKA'){
            var urlCoverArt = MAGDALENAC;
        }
        else if (artistRadio = 'BTS'){
            var urlCoverArt = BTS;
        }
        else if (artistRadio == 'DANI'){
            var urlCoverArt = DANI;
        }
        else if (artistRadio == 'IGOR DZAMBAZOV'){
            var urlCoverArt = IGOR;
        }
        else if (artistRadio == 'KUKU LELE'){
            var urlCoverArt = KUKULELE;
        }
        else if (artistRadio == 'REBEKA'){
            var urlCoverArt = REBEKA;
        }
        else if (artistRadio == 'JAX JONES'){
            var urlCoverArt = JAX;
        }
        else if (artistRadio == 'EROS RAMAZZOTTI'){
            var urlCoverArt = EROS;
        }
        else if (artistRadio == 'NOKAUT'){
            var urlCoverArt = NOKAUNT;
        }
        else if (artistRadio == 'NOVI DECKI'){
            var urlCoverArt = NOVIDECKI;
        }
        else if (artistRadio == 'AREA'){
            var urlCoverArt = AREA;
        }
        else if (artistRadio == 'DZOKSI'){
            var urlCoverArt = DZOKSI;
        }
        else if (artistRadio == 'ZAKLINA I DZOKSI'){
            var urlCoverArt = DZOKSI;
        }
        else if (artistRadio == 'TRAJCE MANEV'){
            var urlCoverArt = TRAJCE;
        }
        else if (artistRadio == 'DARIO'){
            var urlCoverArt = DARIO;
        }
        else if (artistRadio == 'SNEZANA DZEPOVSKA'){
            var urlCoverArt = JINGAL;
        }
        else if (artistRadio == 'ERZANA'){
            var urlCoverArt = ERZANA;
        }
        else if (artistRadio == 'KALIOPI'){
            var urlCoverArt = KALIOPI;
        }
        else if (artistRadio == 'MARJAN STOJANOVSKI'){
            var urlCoverArt = MARIJAN;
        }
        else if (artistRadio == 'TOSE PROESKI'){
            var urlCoverArt = TOSE;
        }
        else if (artistRadio == 'MAGIJA'){
            var urlCoverArt = MAGIJA;
        }
        else if (artistRadio == 'MAJA ODZAKLIEVSKA'){
            var urlCoverArt = MAJAO;
        }
        else if (artistRadio == 'MARIJANA I ROSANA'){
            var urlCoverArt = MIJ;
        }
        else if (artistRadio == 'DRAGAN KARANFILOVSKI BOJS'){
            var urlCoverArt = BOJS;
        }
        else if (artistRadio == 'MIKI JOVANOVSKI DZAFER'){
            var urlCoverArt = DZAFER;
        }
        else if (artistRadio == 'ALEKSANDAR MITEVSKI'){
            var urlCoverArt = ALEKSANDARM;
        }
        else if (artistRadio == 'SLATKARISTIKA'){
            var urlCoverArt = SLATKARISTIKA;
        }
        else if (artistRadio == 'SLAVICA ANGELOVA'){
            var urlCoverArt = SLAVICAANGELOVA;
        }
        else if (artistRadio == 'VASIL GARVANLIEV'){
            var urlCoverArt = VASILG;
        }
        else if (artistRadio == 'REGARD'){
            var urlCoverArt = REGARD;
        }
        else if (artistRadio == 'THE LAST EXPEDITION'){
            var urlCoverArt = LASTexpedition;
        }
        else if (artistRadio == 'BARBARA'){
            var urlCoverArt = BARBARA;
        }
        else if (artistRadio == 'DARIO'){
            var urlCoverArt = DARIO;
        }
        else if (artistRadio == 'THEA'){
            var urlCoverArt = THEA;
        }
        else if (artistRadio == 'SIGALA'){
            var urlCoverArt = SIGALA;
        }
        else if (artistRadio == 'OGNEN ZDRAVKOVSKI'){
            var urlCoverArt = ZDRAVKOVSKI;
        }
        else if (artistRadio == 'TOPIC'){
            var urlCoverArt = TOPIC;
        }
        else if (artistRadio == 'GURU HARE'){
            var urlCoverArt = HARE;
        }
        else if (artistRadio == 'ALEKSANDAR TARABUNOV'){
            var urlCoverArt = TARABUNOV;
        }
        else if (artistRadio == '24KGOLDN'){
            var urlCoverArt = KGOLDN;
        }
        else if (artistRadio == 'ROBIN THICKE'){
            var urlCoverArt = ROBIN;
        }
        else if (artistRadio == 'K77 PRETPLADNE SO GABI'){
        var urlCoverArt = POZADINA;
        }
        else if (artistRadio == 'BILL MEDLEY'){
            var urlCoverArt = BILL;
        }
        else if (artistRadio == 'SELENA GOMEZ'){
            var urlCoverArt = SELENA;
        }
        else if (artistRadio == 'TAMARA TODEVSKA'){
            var urlCoverArt = TAMARA;
        }
        else if (artistRadio == 'BENEE'){
            var urlCoverArt = BENEE;
        }
        else if (artistRadio == 'FUNK SHUI'){
            var urlCoverArt = FUNKSHUI;
        }
        else if (artistRadio == 'DNK') {
            var urlCoverArt = DNK;
        }
        else if (artistRadio == 'REGARD'){
            var urlCoverArt = PROMO;
        } 
        else if (artistRadio == 'K77'){
            var urlCoverArt = K77;
        }
        else if (artistRadio == 'CAT38'){
            var urlCoverArt = CAT32;
        }
        else if (artistRadio == 'CAT36'){
            var urlCoverArt = CAT32;
        }
        else if (artistRadio == 'CAT38'){
            var urlCoverArt = CAT32;
        }
        else if (artistRadio == 'FON2020'){
            var urlCoverArt = FON2020;
        }
        else if (artistRadio == '06 KANAL77'){
            var urlCoverArt = FON2020;
        }
        else if (artistRadio == '01 SHOW OPENER'){
            var urlCoverArt = FON2020;
        }
        else if (artistRadio == 'KYGO'){
            var urlCoverArt = KYGO;
        }
        else if (artistRadio == 'Suliyana'){
            var urlCoverArt = Suliyana;
        }
        else {
        var urlCoverArt = DEFAULT_COVER_ART;
	    }

        // Get cover art for song history
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                var data = JSON.parse(this.responseText);
                var artworkUrl100 = (data.resultCount) ? data.results[0].artworkUrl100 : urlCoverArt;

                document.querySelectorAll('#historicSong article .cover-historic')[n].style.backgroundImage = 'url(' + artworkUrl100 + ')';
            }
            // Formating characters to UTF-8
            var music = info.song.replace(/&apos;/g, '\'');
            var songHist = music.replace(/&amp;/g, '&');

            var artist = info.artist.replace(/&apos;/g, '\'');
            var artistHist = artist.replace(/&amp;/g, '&');

            $songName[n].innerHTML = songHist;
            $artistName[n].innerHTML = artistHist;

            // Add class for animation
            $historicDiv[n].classList.add('animated');
            $historicDiv[n].classList.add('slideInRight');
        }
        xhttp.open('GET', 'https://itunes.apple.com/search?term=' + encodeURIComponent(info.artist + ' ' + info.song.replace(/[.*]/g, '')) + '&media=music&limit=1', true);
        xhttp.send();

        setTimeout(function () {
            for (var j = 0; j < 2; j++) {
                $historicDiv[j].classList.remove('animated');
                $historicDiv[j].classList.remove('slideInRight');
            }
        }, 2000);
    }

      // Artist Covers - Below 
    this.refreshCover = function (song = '', artist) {
        const JINGLESETELAHIKLAN = "https://images2.imgbox.com/e9/9d/zRaDzpoG_o.png";
        const Cbreak = "https://thumbs2.imgbox.com/f5/eb/S6wD0BK6_t.jpg";
        const RadioBintangTenggara = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLSPAs-qRbddzeii-poy3k5Tsz26fYDw8AFeK04iNOxM1HCD6zMOmi5i9bhK6FBGDree32YzCUhiThpyFYr5Cd9A4yiHlOH9MnYPlH3psMW_zzRL0I6yCuMuAA1RvFfGSJEsY0UY3kQjG8xUDSarEVEWBdFS046suoDe25Ar0K8izBvMwrJIZl-aJ_U_1I/s1600/fF8yUE0.png";
        const SolusiSehat = "https://thumbs2.imgbox.com/f8/ca/GwuLQxLZ_t.jpg";
        const TANDAWAKTUSHOLATDHUHUR = "https://thumbs2.imgbox.com/d1/20/NYuawDvh_t.jpg";
        const jingle = "https://thumbs2.imgbox.com/9f/91/Dlzeilaz_t.jpg";
        const JELAJAHDESA = "https://thumbs2.imgbox.com/7e/dc/vOGdajpd_t.jpg";
        const TS = "https://thumbs2.imgbox.com/cb/a2/63Rsmxe5_t.png";
        const ADZANMAGHRIB = "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/c1/59/25/c15925c6-d225-d3fb-aba2-29f36a67dd57/717124148517.png/640x640bb.png";
        const LylaBand = 'https://2.bp.blogspot.com/_RgDaNmR-Ot8/Scs48y51rpI/AAAAAAAAATk/fvRR3DzK6u8/w1200-h630-p-k-no-nu/lyla3.jpg';
        const WISATABUDAYA = 'https://thumbs2.imgbox.com/c9/6a/Q06BTH52_t.jpg';
        const NickyAstria = 'https://i.scdn.co/image/ab67616d0000b27313b9a54f0dfb36647b954b95';
        const LAGUPENUTUPRADIO = 'https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/ec/3f/64/ec3f643b-0ffd-eb61-9ccf-c8d2c027594f/3ad3589a-548e-4b13-970c-83a2937c7d5c.jpg/640x640bb.jpg';
        const RENDRAPRASETYO = 'https://live.staticflickr.com/65535/53455348976_e4bc1d6d8c_z.jpg';
        const RONI = 'https://live.staticflickr.com/65535/53454432287_67f8f2c3a7_n.jpg';
        const Silvi = 'https://live.staticflickr.com/65535/53455363926_67074fffcc_z.jpg';
        const NURUL = 'https://live.staticflickr.com/65535/53455379586_f43d29dc84_n.jpg';
        const ANITA = 'https://live.staticflickr.com/65535/53455501068_3bff1d7b45.jpg';
        const Dengarkami = 'https://thumbs2.imgbox.com/3f/c4/yx3lPLHp_t.jpg';
        const BintangTenggara = 'https://thumbs2.imgbox.com/f5/64/PLw7SiIT_t.jpg';
        const Tito = 'https://i.scdn.co/image/ab67616d0000b273bb18c21272e15fa7f601eea0';
        const ASHAR = 'https://thumbs2.imgbox.com/99/21/uJr1nZIi_t.png';
        const Citizen = 'https://thumbs2.imgbox.com/b1/29/LxXCnvNr_t.jpg';
        const OpeningRadio = 'https://i.imgur.com/UJpQBhz.jpg';
        const RAYE = 'https://i1.sndcdn.com/artworks-XnuuNNSePazLtEnO-dhrBrQ-t500x500.jpg';
        const REGARD = 'img/izveduvaci/REGARD.jpeg';
        const VASILG = 'img/izveduvaci/VASILG.jpg';
        const SLATKARISTIKA = 'img/izveduvaci/SLATKARISTIKA.jpg';
        const ALEKSANDARM = 'img/izveduvaci/ALEKSANDARM.jpg';
        const DZAFER = 'img/izveduvaci/DZAFER.jpg';
        const BOJS = 'img/izveduvaci/BOJS.jpg';
        const MIJ = 'img/izveduvaci/MIJ.jpg';
        const MAJAO = 'img/izveduvaci/MAJAO.jpg';
        const MAGIJA = 'img/izveduvaci/MAGIJA.jpg';
        const TOSE = 'img/izveduvaci/TOSE.jpg';
        const MARIJAN = 'img/izveduvaci/MARIJAN.jpg';
        const KALIOPI = 'img/izveduvaci/KALIOPI.jpg';
        const ERZANA = 'img/izveduvaci/ERZANA.jpg';
        const TRAJCE = 'img/izveduvaci/TRAJCE.jpg';
        const DZOKSI = 'img/izveduvaci/DZOKSI.jpg';
        const AREA = 'img/izveduvaci/AREA.jpg';
        const NOVIDECKI = 'img/izveduvaci/NOVIDECKI.jpg';
        const EROS = 'img/izveduvaci/EROS.jpg';
        const JAX = 'img/izveduvaci/JAX.jpg';
        const REBEKA = 'img/izveduvaci/REBEKA.jpg';
        const KUKULELE = 'img/izveduvaci/KUKULELE.jpg';
        const IGOR = 'img/izveduvaci/IGOR.jpg';
        const DANI = 'img/izveduvaci/DANI.jpg';
        const BTS = 'https://live.staticflickr.com/65535/53459011184_1df18fcc82_b.jpg';
        const MAGDALENAC = 'img/izveduvaci/MAGDALENAC.png';
        const ELENAR = 'img/izveduvaci/ELENAR.jpg';
        const LAMBE = 'img/izveduvaci/LABME.jpg';
        const VLATKOL = 'img/izveduvaci/VLATKOL.jpg';
        const JOVANJOVANOV = 'img/izveduvaci/JOVANJOVANOV.jpg';
        const SKIPIITYZEE = 'img/izveduvaci/SKIPIITYZEE.jpeg';
        const KAROLINA = 'img/izveduvaci/KAROLINA.jpg';
        const DULEKOKI = 'img/izveduvaci/DULEKOKI.jpg';
        const TYZEE = 'img/izveduvaci/TYZEE.jpg';
        const DIMITAR = 'img/izveduvaci/DIMITAR.jpeg';
        const ELENAM = 'img/izveduvaci/ELENAM.jpg';
        const VIKTORIJA = 'img/izveduvaci/VIKTORJALOBA.jpg';
        const VRCAK = 'img/izveduvac/VRCAK.jpg';
        const NEXTTIME = 'img/izveduvac/NEXTTIME.jpg';
        const MEKIC = 'img/izveduvaci/MEKIC.jpg';
        const VUCICM = 'img/izveduvaci/VUCICM.jpg';
        const BIBA = 'img/izveduvaci/BIBADODEVA.jpg';
        const VERICA = 'img/izveduvaci/VERICA.jpg';
        const ALEKSANDARJ = 'img/izveduvaci/ALEKSANDARJ.jpg';
        const EYECUE = 'img/izveduvaci/EYECUE.jpg';
        const NATASA = 'img/izveduvaci/NATASA.jpg';
        const NOKAUT = 'img/izveduvaci/NOKAUNT.jpg';
        const MARTIJASTANOJKOVIK = 'img/izveduvaci/MARTIJASTANOJKOVIK.jpg';
        const SIMONA = 'img/izveduvaci/SIMONA.jpg';
        const ROBERT = 'img/izveduvaci/ROBERT.jpeg';
        const DSCOLLECTIVE = 'img/izveduvaci/DSCOLLECTIVE.jpg';
        const MIKE = 'img/izveduvaci/TributeMikeOldfield.jpg';
        const MARSHMELLO = 'img/izveduvaci/MARSHMELLO.jpg';
        const JASONDERULO = 'img/izveduvaci/JASONDERULO.jpg';
        const RUDIMENTAL = 'img/izveduvaci/RUDIMENTAL.jpg';
        const DAFTPUNK = 'img/izveduvaci/DAFTPUNK.jpg';
   
        if (artist  == 'JINGLE SETELAH IKLAN') {
            var urlCoverArt = JINGLESETELAHIKLAN;
        }
        else if (artist == 'Commercial Break'){
            var urlCoverArt = Cbreak;
        }
        else if (artist == 'Radio Bintang Tenggara'){
            var urlCoverArt = RadioBintangTenggara;
        }
        else if (artist == 'Solusi Sehat'){
            var urlCoverArt = SolusiSehat;
        }
        else if (artist == 'TANDA WAKTU SHOLAT DHUHUR'){
            var urlCoverArt = TANDAWAKTUSHOLATDHUHUR;
        }
        else if (artist == 'JINGLE'){
            var urlCoverArt = jingle;
        }
        else if (artist == 'JELAJAH DESA'){
            var urlCoverArt = JELAJAHDESA;
        }
        else if (artist == 'TS'){
            var urlCoverArt = TS;
        }
        else if (artist == 'ADZAN MAGHRIB'){
            var urlCoverArt = ADZANMAGHRIB;
        }
        else if (artist == 'Lyla Band'){
            var urlCoverArt = LylaBand;
        }
        else if (artist == 'Wisata Budaya'){
            var urlCoverArt = WISATABUDAYA;
        }
        else if (artist == 'Nicky Astria'){
            var urlCoverArt = NickyAstria;
        }
        else if (artist == 'LAGU PENUTUP RADIO'){
            var urlCoverArt = LAGUPENUTUPRADIO;
        }
        else if (artist == 'RENDRA PRASETYO'){
            var urlCoverArt = RENDRAPRASETYO;
        }
        else if (artist == 'RONI SANTOSO'){
            var urlCoverArt = RONI;
        }
        else if (artist == 'Silvi Muhtarom'){
            var urlCoverArt = Silvi;
        }
        else if (artist == 'NURUL HIDAYAH'){
            var urlCoverArt = NURUL;
        }
        else if (artist == 'ANITA SUMARDI'){
            var urlCoverArt = ANITA;
        }
        else if (artist == 'DENGAR KAMI'){
            var urlCoverArt = Dengarkami;
        }
        else if (artist == 'Bintang Tenggara'){
            var urlCoverArt = BintangTenggara;
        }
        else if (artist == 'Tito'){
            var urlCoverArt = Tito;
        }
        else if (artist == 'TANDA WAKTU SHOLAT ASHAR'){
            var urlCoverArt = ASHAR;
        }
        else if (artist == 'Citizen Journalism'){
            var urlCoverArt = Citizen;
        }
        else if (artist == 'Opening Radio'){
            var urlCoverArt = OpeningRadio;
        }
        else if (artist == 'TYZEE'){
            var urlCoverArt = TYZEE;
        }
        else if (artist == 'DULE I KOKI'){
            var urlCoverArt = DULEKOKI;
        }
        else if (artist == 'KAROLINA'){
            var urlCoverArt = KAROLINA;
        }
        else if (artist == 'SKIPI I TYZEE'){
            var urlCoverArt = SKIPIITYZEE;
        }
        else if (artist == 'JOVAN JOVANOV'){
            var urlCoverArt = JOVANJOVANOV;
        }
        else if (artist == 'VLATKO LOZANOVSKI'){
            var urlCoverArt = VLATKOL;
        }
        else if (artist == 'LAMBE I LJUPKA'){
            var urlCoverArt = LAMBE;
        }
        else if (artist == 'LAMBE ALABAKOVSKI'){
            var urlCoverArt = LAMBE;
        }
        else if (artist == 'LAMBE'){
            var urlCoverArt = LAMBE;
        }
        else if (artist == 'ELENA RISTESKA'){
            var urlCoverArt = ELENAR;
        }
        else if (artist == 'MAGDALENA CVETKOSKA'){
            var urlCoverArt = MAGDALENAC;
        }
        else if (artist == 'BTS'){
            var urlCoverArt = BTS;
        }
        else if (artist == 'DANI'){
            var urlCoverArt = DANI;
        }
        else if (artist == 'IGOR DZAMBAZOV'){
            var urlCoverArt = IGOR;
        }
        else if (artist == 'KUKU LELE'){
            var urlCoverArt = KUKULELE;
        }
        else if (artist == 'REBEKA'){
            var urlCoverArt = REBEKA;
        }
        else if (artist == 'JAX JONES'){
            var urlCoverArt = JAX;
        }
        else if (artist == 'EROS RAMAZZOTTI'){
            var urlCoverArt = EROS;
        }
        else if (artist == 'NOVI DECKI'){
            var urlCoverArt = NOVIDECKI;
        }
        else if (artist == 'AREA'){
            var urlCoverArt = AREA;
        }
        else if (artist == 'DZOKSI'){
            var urlCoverArt = DZOKSI;
        }
        else if (artist == 'ZAKLINA I DZOKSI'){
            var urlCoverArt = DZOKSI;
        }
        else if (artist == 'TRAJCE MANEV'){
            var urlCoverArt = TRAJCE;
        }
        else if (artist == 'DARIO'){
            var urlCoverArt = DARIO;
        }
        else if (artist == 'SNEZANA DZEPOVSKA'){
            var urlCoverArt = JINGAL;
        }
        else if (artist == 'ERZANA'){
            var urlCoverArt = ERZANA;
        }
        else if (artist == 'KALIOPI'){
            var urlCoverArt = KALIOPI;
        }
        else if (artist == 'MARJAN STOJANOVSKI'){
            var urlCoverArt = MARIJAN;
        }
        else if (artist == 'TOSE PROESKI'){
            var urlCoverArt = TOSE;
        }
        else if (artist == 'MAGIJA'){
            var urlCoverArt = MAGIJA;
        }
        else if (artist == 'MAJA ODZAKLIEVSKA'){
            var urlCoverArt = MAJAO;
        }
        else if (artist == 'MARIJANA I ROSANA'){
            var urlCoverArt = MIJ;
        }
        else if (artist == 'DRAGAN KARANFILOVSKI BOJS'){
            var urlCoverArt = BOJS;
        }
        else if (artist == 'MIKI JOVANOVSKI DZAFER'){
            var urlCoverArt = DZAFER;
        }
        else if (artist == 'ALEKSANDAR MITEVSKI'){
            var urlCoverArt = ALEKSANDARM;
        }
        else if (artist == 'SLATKARISTIKA'){
            var urlCoverArt = SLATKARISTIKA;
        }
        else if (artist == 'VASIL GARVANLIEV'){
            var urlCoverArt = VASILG;
        }
        else if (artist == 'SLAVICAANGELOVA'){
            var urlCoverArt = SLAVICAANGELOVA;
        }
        else if (artist == 'REGARD'){
            var urlCoverArt = REGARD;
        }
        else if (artist == 'THE LAST EXPEDITION'){
            var urlCoverArt = LASTexpedition;
        }
        else if (artist == 'BARBARA'){
            var urlCoverArt = BARBARA;
        }
        else if (artist == 'DARIO'){
            var urlCoverArt = DARIO;
        }
        else if (artist == 'THEA'){
            var urlCoverArt = THEA;
        }
        else if (artist == 'SIGALA'){
            var urlCoverArt = SIGALA;
        }
        else if (artist == 'TOPIC'){
            var urlCoverArt = TOPIC;
        }
        else if (artist == 'OGNEN ZDRAVKOVSKI'){
            var urlCoverArt = ZDRAVKOVSKI;
        }
        else if (artist == 'GURU HARE'){
            var urlCoverArt = HARE;
        }
        else if (artist == 'ALEKSANDAR TARABUNOV'){
            var urlCoverArt = TARABUNOV;
        }
        else if (artist == '24KGOLDN'){
            var urlCoverArt = KGOLDN;
        }
        else if (artist == 'ROBIN THICKE'){
            var urlCoverArt = ROBIN;
        }
        else if (artist == 'BILL MEDLEY'){
            var urlCoverArt = BILL;
        }
        else if (artist == 'SELENA GOMEZ'){
            var urlCoverArt = SELENA;
        }
        else if (artist == 'TAMARA TODEVSKA'){
            var urlCoverArt = TAMARA;
        }
        else if (artist == 'BENEE'){
            var urlCoverArt = BENEE;
        }
        else if (artist  == 'K77 PRETPLADNE SO GABI'){
        var urlCoverArt = POZADINA;
        } 
        else if (artist =='DNK'){
            var urlCoverArt = DNK;
        }
        else if (artist == 'FUNK SHUI'){
            var urlCoverArt = FUNKSHUI;
        }
        else if (artist  == 'REGARD'){
        var urlCoverArt = PROMO;
        } 
        else if (artist == 'K77'){
        var urlCoverArt = K77;
        }
        else if (artist == 'CAT32'){
            var urlCoverArt = CAT32;
        }
        else if (artist == 'CAT36'){
            var urlCoverArt = CAT32;
        }
        else if (artist == 'CAT38'){
            var urlCoverArt = CAT32;
        }
        else if (artist == 'FON2020'){
            var urlCoverArt = FON2020;
        }
        else if (artist == '06 KANAL77'){
            var urlCoverArt = FON2020;
        }
        else if (artist == '01 SHOW OPENER'){
            var urlCoverArt = FON2020;
        }
        else if (artist == 'KYGO'){
            var urlCoverArt = KYGO;
        }
        else if (artist == 'RAYE Ft 070 Shake'){
            var urlCoverArt = RAYE;
        }
        else {
        var urlCoverArt = DEFAULT_COVER_ART;
	    }

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            var coverArt = document.getElementById('currentCoverArt');
            var coverBackground = document.getElementById('bgCover');

            // Get cover art URL on iTunes API
            if (this.readyState === 4 && this.status === 200) {
                var data = JSON.parse(this.responseText);
                var artworkUrl100 = (data.resultCount) ? data.results[0].artworkUrl100 : urlCoverArt;

                // If it returns any data, changes the image resolution or sets the default
                urlCoverArt = (artworkUrl100 != urlCoverArt) ? artworkUrl100.replace('100x100bb', '1200x1200bb') : urlCoverArt;
                var urlCoverArt96 = (artworkUrl100 != urlCoverArt) ? urlCoverArt.replace('1200x1200bb', '96x96bb') : urlCoverArt;
                var urlCoverArt128 = (artworkUrl100 != urlCoverArt) ? urlCoverArt.replace('1200x1200bb', '128x128bb') : urlCoverArt;
                var urlCoverArt192 = (artworkUrl100 != urlCoverArt) ? urlCoverArt.replace('1200x1200bb', '192x192bb') : urlCoverArt;
                var urlCoverArt256 = (artworkUrl100 != urlCoverArt) ? urlCoverArt.replace('1200x1200bb', '256x256bb') : urlCoverArt;
                var urlCoverArt384 = (artworkUrl100 != urlCoverArt) ? urlCoverArt.replace('1200x1200bb', '384x384bb') : urlCoverArt;

                coverArt.style.backgroundImage = 'url(' + urlCoverArt + ')';
                coverArt.className = 'animated bounceInLeft';

                coverBackground.style.backgroundImage = 'url(' + urlCoverArt + ')';

                setTimeout(function () {
                    coverArt.className = '';
                }, 2000);

                if ('mediaSession' in navigator) {
                    navigator.mediaSession.metadata = new MediaMetadata({
                        title: song,
                        artist: artist,
                        artwork: [{
                                src: urlCoverArt96,
                                sizes: '96x96',
                                type: 'image/png'
                            },
                            {
                                src: urlCoverArt128,
                                sizes: '128x128',
                                type: 'image/png'
                            },
                            {
                                src: urlCoverArt192,
                                sizes: '192x192',
                                type: 'image/png'
                            },
                            {
                                src: urlCoverArt256,
                                sizes: '256x256',
                                type: 'image/png'
                            },
                            {
                                src: urlCoverArt384,
                                sizes: '384x384',
                                type: 'image/png'
                            },
                            {
                                src: urlCoverArt,
                                sizes: '512x512',
                                type: 'image/png'
                            }
                        ]
                    });
                }
            }
        }
        xhttp.open('GET', 'https://itunes.apple.com/search?term=' + artist + ' ' + song + '&media=music&limit=1', true);
        xhttp.send();
    }

    this.changeVolumeIndicator = function (volume) {
        document.getElementById('volIndicator').innerHTML = volume;

        if (typeof (Storage) !== 'undefined') {
            localStorage.setItem('volume', volume);
        }
    }

    this.setVolume = function () {
        if (typeof (Storage) !== 'undefined') {
            var volumeLocalStorage = (!localStorage.getItem('volume')) ? 80 : localStorage.getItem('volume');
            document.getElementById('volume').value = volumeLocalStorage;
            document.getElementById('volIndicator').innerHTML = volumeLocalStorage;
        }
    }

    this.refreshLyric = function (currentSong, currentArtist) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                var data = JSON.parse(this.responseText);

                var openLyric = document.getElementsByClassName('lyrics')[0];

                if (data.type === 'exact' || data.type === 'aprox') {
                    var lyric = data.mus[0].text;

                    document.getElementById('lyric').innerHTML = lyric.replace(/\n/g, '<br />');
                    openLyric.style.opacity = "1";
                    openLyric.setAttribute('data-toggle', 'modal');
                } else {
                    openLyric.style.opacity = "0.3";
                    openLyric.removeAttribute('data-toggle');

                    var modalLyric = document.getElementById('modalLyrics');
                    modalLyric.style.display = "none";
                    modalLyric.setAttribute('aria-hidden', 'true');
                    (document.getElementsByClassName('modal-backdrop')[0]) ? document.getElementsByClassName('modal-backdrop')[0].remove(): '';
                }
            } else {
                document.getElementsByClassName('lyrics')[0].style.opacity = "0.3";
                document.getElementsByClassName('lyrics')[0].removeAttribute('data-toggle');
            }
        }
        xhttp.open('GET', 'https://api.vagalume.com.br/search.php?apikey=' + API_KEY + '&art=' + currentArtist + '&mus=' + currentSong.toLowerCase(), true);
        xhttp.send()
    }
}

var audio = new Audio(URL_STREAMING);

// Player control
function Player() {
    this.play = function () {
        audio.play();

        var defaultVolume = document.getElementById('volume').value;

        if (typeof (Storage) !== 'undefined') {
            if (localStorage.getItem('volume') !== null) {
                audio.volume = intToDecimal(localStorage.getItem('volume'));
            } else {
                audio.volume = intToDecimal(defaultVolume);
            }
        } else {
            audio.volume = intToDecimal(defaultVolume);
        }
        document.getElementById('volIndicator').innerHTML = defaultVolume;
    };

    this.pause = function () {
        audio.pause();
    };
}

// On play, change the button to pause
audio.onplay = function () {
    var botao = document.getElementById('playerButton');

    if (botao.className === 'fa fa-play') {
        botao.className = 'fa fa-pause';
    }
}

// On pause, change the button to play
audio.onpause = function () {
    var botao = document.getElementById('playerButton');

    if (botao.className === 'fa fa-pause') {
        botao.className = 'fa fa-play';
    }
}

// Unmute when volume changed
audio.onvolumechange = function () {
    if (audio.volume > 0) {
        audio.muted = false;
    }
}

audio.onerror = function () {
    var confirmacao = confirm('Error on communicate to server. \nClick OK to try again.');

    if (confirmacao) {
        window.location.reload();
    }
}

document.getElementById('volume').oninput = function () {
    audio.volume = intToDecimal(this.value);

    var page = new Page();
    page.changeVolumeIndicator(this.value);
}

function togglePlay() {
    if (!audio.paused) {
        audio.pause();
    } else {
        audio.load();
        audio.play();
    }
}

function volumeUp() {
    var vol = audio.volume;
    if(audio) {
        if(audio.volume >= 0 && audio.volume < 1) {
            audio.volume = (vol + .01).toFixed(2);
        }
    }
}

function volumeDown() {
    var vol = audio.volume;
    if(audio) {
        if(audio.volume >= 0.01 && audio.volume <= 1) {
            audio.volume = (vol - .01).toFixed(2);
        }
    }
}

function mute() {
    if (!audio.muted) {
        document.getElementById('volIndicator').innerHTML = 0;
        document.getElementById('volume').value = 0;
        audio.volume = 0;
        audio.muted = true;
    } else {
        var localVolume = localStorage.getItem('volume');
        document.getElementById('volIndicator').innerHTML = localVolume;
        document.getElementById('volume').value = localVolume;
        audio.volume = intToDecimal(localVolume);
        audio.muted = false;
    }
}

function getStreamingData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState === 4 && this.status === 200) {

            if(this.response.length === 0) {
                console.log('%cdebug', 'font-size: 22px')
            }

            var data = JSON.parse(this.responseText);

            var page = new Page();

            // Formating characters to UTF-8
            let song = data.currentSong.replace(/&apos;/g, '\'');
            currentSong = song.replace(/&amp;/g, '&');

            let artist = data.currentArtist.replace(/&apos;/g, '\'');
            currentArtist = artist.replace(/&amp;/g, '&');

            // Change the title
            document.title = currentArtist + ' - ' + currentSong + ' | ' + RADIO_NAME;

            if (document.getElementById('currentSong').innerHTML !== song) {
                page.refreshCover(currentSong, currentArtist);
                page.refreshCurrentSong(currentSong, currentArtist);
                page.refreshLyric(currentSong, currentArtist);

                for (var i = 0; i < 2; i++) {
                    page.refreshHistoric(data.songHistory[i], i);
                }
            }
        } 
    };

    var d = new Date();

    // Requisition with timestamp to prevent cache on mobile devices
    xhttp.open('GET', 'https://api.streamafrica.net/zeno/index.php?z='+zenoid);
    xhttp.send();
}

// Player control by keys
document.addEventListener('keydown', function (k) {
    var k = k || window.event;
    var key = k.keyCode || k.which;
    
    var slideVolume = document.getElementById('volume');

    var page = new Page();

    switch (key) {
        // Arrow up
        case 38:
            volumeUp();
            slideVolume.value = decimalToInt(audio.volume);
            page.changeVolumeIndicator(decimalToInt(audio.volume));
            break;
        // Arrow down
        case 40:
            volumeDown();
            slideVolume.value = decimalToInt(audio.volume);
            page.changeVolumeIndicator(decimalToInt(audio.volume));
            break;
        // Spacebar
        case 32:
            togglePlay();
            break;
        // P
        case 80:
            togglePlay();
            break;
        // M
        case 77:
            mute();
            break;
        // 0
        case 48:
            audio.volume = 0;
            slideVolume.value = 0;
            page.changeVolumeIndicator(0);
            break;
        // 0 numeric keyboard
        case 96:
            audio.volume = 0;
            slideVolume.value = 0;
            page.changeVolumeIndicator(0);
            break;
        // 1
        case 49:
            audio.volume = .1;
            slideVolume.value = 10;
            page.changeVolumeIndicator(10);
            break;
        // 1 numeric key
        case 97:
            audio.volume = .1;
            slideVolume.value = 10;
            page.changeVolumeIndicator(10);
            break;
        // 2
        case 50:
            audio.volume = .2;
            slideVolume.value = 20;
            page.changeVolumeIndicator(20);
            break;
        // 2 numeric key
        case 98:
            audio.volume = .2;
            slideVolume.value = 20;
            page.changeVolumeIndicator(20);
            break;
        // 3
        case 51:
            audio.volume = .3;
            slideVolume.value = 30;
            page.changeVolumeIndicator(30);
            break;
        // 3 numeric key
        case 99:
            audio.volume = .3;
            slideVolume.value = 30;
            page.changeVolumeIndicator(30);
            break;
        // 4
        case 52:
            audio.volume = .4;
            slideVolume.value = 40;
            page.changeVolumeIndicator(40);
            break;
        // 4 numeric key
        case 100:
            audio.volume = .4;
            slideVolume.value = 40;
            page.changeVolumeIndicator(40);
            break;
        // 5
        case 53:
            audio.volume = .5;
            slideVolume.value = 50;
            page.changeVolumeIndicator(50);
            break;
        // 5 numeric key
        case 101:
            audio.volume = .5;
            slideVolume.value = 50;
            page.changeVolumeIndicator(50);
            break;
        // 6 
        case 54:
            audio.volume = .6;
            slideVolume.value = 60;
            page.changeVolumeIndicator(60);
            break;
        // 6 numeric key
        case 102:
            audio.volume = .6;
            slideVolume.value = 60;
            page.changeVolumeIndicator(60);
            break;
        // 7
        case 55:
            audio.volume = .7;
            slideVolume.value = 70;
            page.changeVolumeIndicator(70);
            break;
        // 7 numeric key
        case 103:
            audio.volume = .7;
            slideVolume.value = 70;
            page.changeVolumeIndicator(70);
            break;
        // 8
        case 56:
            audio.volume = .8;
            slideVolume.value = 80;
            page.changeVolumeIndicator(80);
            break;
        // 8 numeric key
        case 104:
            audio.volume = .8;
            slideVolume.value = 80;
            page.changeVolumeIndicator(80);
            break;
        // 9
        case 57:
            audio.volume = .9;
            slideVolume.value = 90;
            page.changeVolumeIndicator(90);
            break;
        // 9 numeric key
        case 105:
            audio.volume = .9;
            slideVolume.value = 90;
            page.changeVolumeIndicator(90);
            break;
    }
});

function intToDecimal(vol) {
    return vol / 100;
}

function decimalToInt(vol) {
    return vol * 100;
}
