import { format } from 'date-fns';
import { id } from 'date-fns/locale';

function BeasiswaDetail({ beasiswa, mitra }) {
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
          {/* {beasiswa.statusPendaftaran && (
            <div
              className={`mt-8 inline-block rounded border px-2 py-1 text-sm font-semibold ${
                beasiswa.statusPendaftaran === 'Diterima'
                  ? 'bg-green-100 text-green-900'
                  : beasiswa.statusPendaftaran === 'Ditolak'
                  ? 'bg-red-100 text-red-900'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              {beasiswa.statusPendaftaran}
            </div>
          )} */}
          {beasiswa.statusPendaftaran && (
            <div
              className={`mt-8 inline-block rounded border px-2 py-1 text-sm font-semibold ${
                beasiswa.status === 'Diterima'
                  ? 'bg-green-100 text-green-900'
                  : beasiswa.status === 'Ditolak'
                  ? 'bg-red-100 text-red-900'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              {beasiswa.statusPendaftaran}
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
        </>
      )}
    </div>
  );
}

export default BeasiswaDetail;
