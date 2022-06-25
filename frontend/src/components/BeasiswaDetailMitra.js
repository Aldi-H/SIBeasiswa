import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import TableSiswaComponent from './TableSiswaComponent';

function BeasiswaDetailMitra({ beasiswa, mitra }) {
  return (
    <div className="rounded-lg border border-gray-300 p-4 shadow-md">
      {!beasiswa ? (
        <p className="text-center">
          Pilih beasiswa untuk melihat info lebih detail
        </p>
      ) : (
        <>
          <h2 className="text-xl font-semibold">{beasiswa.judul_beasiswa}</h2>
          {/* <h2 className="text-xl font-semibold">{beasiswa.nama}</h2> */}
          <div className="flex gap-4">
            <p>{beasiswa.namaMitra}</p>
            {mitra && (
              <p className="font-semibold">
                {mitra.pic} ({mitra.nomorPic})
              </p>
            )}
          </div>
          {beasiswa.tanggalPembukaan && beasiswa.tanggalPenutupan && (
            <div className="mt-2 grid w-fit grid-cols-[auto_auto] gap-x-4">
              <span className="font-semibold">Buka</span>
              <time dateTime={beasiswa.tanggalPembukaan}>
                {format(new Date(beasiswa.tanggalPembukaan), 'dd MMMM yyyy', {
                  locale: id,
                })}
              </time>
              <span className="font-semibold">Tutup</span>
              <time dateTime={beasiswa.tanggalPenutupan}>
                {format(new Date(beasiswa.tanggalPenutupan), 'dd MMMM yyyy', {
                  locale: id,
                })}
              </time>
            </div>
          )}
          {beasiswa.tanggal_pembukaan && beasiswa.tanggal_penutupan && (
            <div className="mt-2 grid w-fit grid-cols-[auto_auto] gap-x-4">
              <span className="font-semibold">Buka</span>
              <time dateTime={beasiswa.tanggal_pembukaan}>
                {format(new Date(beasiswa.tanggal_pembukaan), 'dd MMMM yyyy', {
                  locale: id,
                })}
              </time>
              <span className="font-semibold">Tutup</span>
              <time dateTime={beasiswa.tanggal_penutupan}>
                {format(new Date(beasiswa.tanggal_penutupan), 'dd MMMM yyyy', {
                  locale: id,
                })}
              </time>
            </div>
          )}
          <h2 className="mt-6 font-semibold">Deskripsi</h2>
          <p className="mt-1">{beasiswa.deskripsi}</p>
          <h2 className="mt-6 font-semibold">Benefits</h2>
          <p className="mt-1">
            {beasiswa.benefits.split(`\\n`).map((benefits) => (
              <p>{benefits}</p>
            ))}
          </p>

          <TableSiswaComponent />
        </>
      )}
    </div>
  );
}

export default BeasiswaDetailMitra;
