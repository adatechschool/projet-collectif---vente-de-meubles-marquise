import React from 'react';

const Connexion = () => {
	return (
		<div className='w-full mx-auto flex justify-center items-center px-6 py-8 flex-grow'>
			<section className='w-6/12 bg-white rounded-lg shadow dark:border border-sky-700'>
			<h1 className='text-center text-lg font-bold	pt-8'>Connectez-vous à votre compte</h1>
				<form className="p-6 space-y-8" action="#">
					<div>
						<label for="email" className="block mb-2 text-sm font-medium text-gray-900">Email*</label>
						<input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600 block w-full p-2.5" placeholder="name@email.fr" required="" />
					</div>
					<div>
						<label for="password" className="block mb-2 text-sm font-medium text-gray-900">Mot de passe*</label>
						<input type="password" name="password" id="password" placeholder="••••••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:border-blue-500" required="" />
					</div>
					<div className="flex items-center justify-between px-3.5">
						<p className='text-xs	text-slate-600'>* Informations obligatoires</p>
						<a href="/" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Mot de passe oublié ?</a>
					</div>
					<div className='flex justify-center'>
						<button type="submit" className="w-full max-w-xs text-black bg-white border-2 border-black font-medium rounded-lg text-sm hover:text-white hover:bg-black px-5 py-2.5 text-center">Se connecter</button>
					</div>
					<p className="text-sm font-light text-gray-500 dark:text-gray-400">
						Nouvel utilisateur ? <a href="./Inscription.js" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Je créer mon compte</a>
					</p>
				</form>
			</section>
		</div>
	);
};

export default Connexion;