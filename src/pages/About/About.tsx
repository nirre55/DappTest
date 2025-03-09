import React from 'react';

export const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            À Propos de Nous
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Découvrez notre équipe et notre mission
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Notre Projet</h2>
          <div className="bg-white shadow overflow-hidden rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <p className="text-gray-600 text-lg">
                [Description détaillée du projet à personnaliser]
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Notre Équipe</h2>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {/* Exemple de carte membre d'équipe - à dupliquer selon besoin */}
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="px-4 py-5 sm:p-6">
                <div className="text-center">
                  <h3 className="text-lg font-medium text-gray-900">Nom du Membre</h3>
                  <p className="mt-1 text-sm text-gray-500">Rôle / Position</p>
                  <p className="mt-3 text-sm text-gray-600">
                    Description courte du rôle et des responsabilités
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact</h2>
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-4 py-5 sm:p-6">
              <p className="text-gray-600 text-lg">
                Pour plus d'informations, contactez-nous à : [email@example.com]
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
