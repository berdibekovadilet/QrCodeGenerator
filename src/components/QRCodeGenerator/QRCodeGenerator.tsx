import React from 'react';
import QRCode from 'qrcode.react';

interface QRCodeGeneratorProps {
    value: string;
}


export const QrCodeGenerator: React.FC<QRCodeGeneratorProps> = ({value}) => {
    return <QRCode value={value}/>
};

