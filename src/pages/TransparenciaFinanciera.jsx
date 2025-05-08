import React from 'react';

const TransparenciaFinanciera = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow space-y-6">
      <h1 className="text-3xl font-bold">Transparencia Financiera</h1>
      <p className="text-gray-700">
        Aquí puedes consultar nuestro dashboard de ejecución presupuestal y financiera.
      </p>

      <div className="w-full rounded-lg">
        <iframe
          className="w-full border-0 rounded-lg"
          src="https://lookerstudio.google.com/embed/reporting/0e6fc58b-ca38-49cc-8891-b51db15a268a/page/6ZjJF"
          loading="lazy"
          allow="fullscreen"
          height="800"
          sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
          title="Dashboard de Ejecución Presupuestal y Financiera"
        ></iframe>
      </div>
    </section>
  );
};

export default TransparenciaFinanciera;