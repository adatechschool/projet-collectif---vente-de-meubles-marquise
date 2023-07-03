import React from 'react';

function Inscription() {
  return (
    <div className='w-full mx-auto bg-white flex items-center justify-center my-12'>
      <div className='w-3/4 max-w-xl h-fit border-2 rounded-lg shadow dark:border border-sky-700'>
        <h2 className="text-center text-xl font-bold py-6">Créer un compte</h2>
        <form className="mx-5 text-sm space-y-0">
          <div className="flex flex-col my-4">
              <label for="prenom" className="text-base font-medium text-gray-900">Prénom</label>
              <input type="text" name="prenom" id="prenom" className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600 block w-full p-2.5" placeholder="Votre prénom" />
          </div>
          <div className="flex flex-col my-4">
            <label for="nom" className="text-base font-medium text-gray-900">Nom</label>
            <input type="text" name="nom" id="nom" className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600 block w-full p-2.5" placeholder="Votre nom" required="" />
          </div>
          <div className="flex flex-col my-4">
              <label for="email" className="text-base font-medium text-gray-900">E-mail</label>
              <input type="email" name="email" id="email" className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600 block w-full p-2.5" placeholder="nom@email.fr" />
          </div>
          <div>
            <label for="countries" class="block mb-2 text-base font-medium text-gray-900">Pays</label>
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black dark:focus:ring-blue-600 dark:focus:border-blue-700">
              <option selected>Veuillez sélectionner votre pays</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="BE">Belgique</option>
              <option value="IT">Italie</option>
              <option value="ES">Espagne</option>
              <option value="LU">Luxembourg</option>
              <option value="NL">Pays-Bas</option>
            </select>
          </div>
          <div className="flex flex-col my-4">
              <label for="street-address" className="text-base font-medium text-gray-900">Adresse n° et nom de rue</label>
              <input type="street-address" name="street-address" id="street-address" className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600 block w-full p-2.5" placeholder="116 Rue du Faubourg Saint-Martin" />
          </div>
          <div className="flex flex-col my-4">
              <label for="postal-code" className="text-base font-medium text-gray-900">Code postal</label>
              <input type="postal-code" name="postal-code" id="postal-code" className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600 block w-full p-2.5" placeholder="75010" />
          </div>
          <div className="flex flex-col my-4">
              <label for="city" className="text-base font-medium text-gray-900">Ville</label>
              <input type="city" name="city" id="city" className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600 block w-full p-2.5" placeholder="Paris" />
          </div>
          <div className="flex flex-col my-4">
              <label for="password" className="text-base font-medium text-gray-900">Mot de passe</label>
              <div className="relative flex items-center mt-2">
                  <input type='text' name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600 block w-full p-2.5" placeholder="Saisissez votre mot de passe" />
              </div>
          </div>
          <div className="flex flex-col my-4">
              <label for="password_confirmation" className="text-base font-medium text-gray-900">Confirmation du mot de passe</label>
              <input type='text' name="password_confirmation" id="password_confirmation" className=" mt-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600 block w-full p-2.5" placeholder="Confirmer votre mot de passe" />
          </div>
          <div className="flex items-center">
              <input type="checkbox" name="remember_me" id="remember_me" className="mr-2 focus:ring-0 rounded" />
              <label for="remember_me" className="text-gray-700">J'accepte les <a href="/" className="text-blue-600 hover:text-blue-700 hover:underline">termes</a> et la <a href="/" className="text-blue-600 hover:text-blue-700 hover:underline">politique de confidentialité</a></label>
          </div>
          <div className="my-4 flex items-center justify-end space-x-4 pb-8">
              <button className="text-black bg-white border-2 border-black font-medium hover:text-white hover:bg-black rounded-lg px-8 py-2 hover:shadow-xl transition duration-150 uppercase">Créer mon compte</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Inscription;