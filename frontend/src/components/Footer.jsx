import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-800 to-teal-600 text-white py-6">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Handy IATI. Created by Leila. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
