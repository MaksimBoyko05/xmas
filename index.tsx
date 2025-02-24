import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <header className="bg-gray-800 p-4">
                <h1 className="text-2xl font-bold">Spotify</h1>
            </header>
            <main className="p-4">
                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Recently Played</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {/* Example cards */}
                        <div className="bg-gray-700 p-4 rounded-lg">
                            <img src="https://via.placeholder.com/150" alt="Album" className="w-full h-32 object-cover rounded-lg mb-2" />
                            <h3 className="text-lg font-semibold">Album Name</h3>
                            <p className="text-sm text-gray-400">Artist Name</p>
                        </div>
                        {/* Add more cards as needed */}
                    </div>
                </section>
                <section>
                    <h2 className="text-xl font-semibold mb-4">Your Playlists</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {/* Example cards */}
                        <div className="bg-gray-700 p-4 rounded-lg">
                            <img src="https://via.placeholder.com/150" alt="Playlist" className="w-full h-32 object-cover rounded-lg mb-2" />
                            <h3 className="text-lg font-semibold">Playlist Name</h3>
                            <p className="text-sm text-gray-400">Description</p>
                        </div>
                        {/* Add more cards as needed */}
                    </div>
                </section>
            </main>
            <footer className="bg-gray-800 p-4 text-center">
                <p className="text-sm text-gray-400">© 2023 Spotify</p>
            </footer>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));