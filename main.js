
        let nomorUrut = 1;

        function simpanNilai() {
            const nim = document.getElementById('nim').value;
            const nama = document.getElementById('nama').value;
            const presensiTeori = parseFloat(document.getElementById('presensi-teori').value);
            const tugasTeori = parseFloat(document.getElementById('tugas-teori').value);
            const utsTeori = parseFloat(document.getElementById('uts-teori').value);
            const uasTeori = parseFloat(document.getElementById('uas-teori').value);
            const presensiPraktek = parseFloat(document.getElementById('presensi-praktek').value);
            const tugasPraktek = parseFloat(document.getElementById('tugas-praktek').value);
            const utsPraktek = parseFloat(document.getElementById('uts-praktek').value);
            const uasPraktek = parseFloat(document.getElementById('uas-praktek').value);

            // Validasi untuk memastikan semua kolom diisi dengan benar
            if (!nim || !nama || isNaN(presensiTeori) || isNaN(tugasTeori) || isNaN(utsTeori) || isNaN(uasTeori) ||
                isNaN(presensiPraktek) || isNaN(tugasPraktek) || isNaN(utsPraktek) || isNaN(uasPraktek)) {
                alert('Harap isi semua kolom dengan benar.');
                return;
            }

            const nilaiAkhirTeori = (presensiTeori * 0.1) + (tugasTeori * 0.3) + (utsTeori * 0.3) + (uasTeori * 0.3);
            const nilaiAkhirPraktek = (presensiPraktek * 0.1) + (tugasPraktek * 0.3) + (utsPraktek * 0.3) + (uasPraktek * 0.3);
            const nilaiAkhir = (nilaiAkhirTeori + nilaiAkhirPraktek) / 2;
            const grade = hitungGrade(nilaiAkhir);
          
            const tableBody = document.querySelector('#nilaiTable tbody');
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${nomorUrut++}</td>
                <td>${nim}</td>
                <td>${nama}</td>
                <td>${presensiTeori}%</td>
                <td>${tugasTeori}</td>
                <td>${utsTeori}</td>
                <td>${uasTeori}</td>
                <td>${presensiPraktek}%</td>
                <td>${tugasPraktek}</td>
                <td>${utsPraktek}</td>
                <td>${uasPraktek}</td>
                <td>${nilaiAkhir.toFixed(2)}</td>
                <td>${grade}</td>
            `;
            tableBody.appendChild(row);
            resetForm();
        }

        function resetForm() {
            document.getElementById('nim').value = '';
            document.getElementById('nama').value = '';
            document.getElementById('presensi-teori').value = '';
            document.getElementById('tugas-teori').value = '';
            document.getElementById('uts-teori').value = '';
            document.getElementById('uas-teori').value = '';
            document.getElementById('presensi-praktek').value = '';
            document.getElementById('tugas-praktek').value = '';
            document.getElementById('uts-praktek').value = '';
            document.getElementById('uas-praktek').value = '';
        }

        function hitungGrade(nilaiAkhir) {
            if (nilaiAkhir >= 85) return 'A';
            if (nilaiAkhir >= 75) return 'B';
            if (nilaiAkhir >= 60) return 'C';
            if (nilaiAkhir >= 50) return 'D';
            return 'E';
        }

        function resetTable() {
            document.querySelector('#nilaiTable tbody').innerHTML = '';
            nomorUrut = 1;
        }
    

