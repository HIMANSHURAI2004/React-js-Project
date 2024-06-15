import React from 'react';

function Footer() {
    return (
        <div className='flex justify-between border-t border-t-black pb-4 pt-3 text-[14px]'>
            <p>© 2024 Edusity. All rights reserved.</p>
            <div className='flex gap-4'>
                <p>Terms of Services</p>
                <p>Privacy Policy</p>
            </div>
        </div>
    );
}

export default Footer;