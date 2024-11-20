"use client"
import React, { useEffect, useState } from "react";

interface ClockCardProps {
    city: string;
    country: string;
    timeZone: string;
}

const ClockCard: React.FC<ClockCardProps> = ({ city, country, timeZone }) => {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const options: Intl.DateTimeFormatOptions = {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true,
            };
            const localTime = new Intl.DateTimeFormat("en-US", {
                ...options,
                timeZone,
            }).format(new Date());
            setTime(localTime);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000); // Her saniye güncelle
        return () => clearInterval(interval); // Bileşen kaldırıldığında intervali temizle
    }, [timeZone]);

    return (
        <div className="text-start text-white">
            <p className="text-sm font-bold ">
                {city}, {country}
            </p>
            <p className="text-sm font-normal">{time}</p>
        </div>
    );
};

export default ClockCard;
