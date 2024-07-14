import React, { useEffect, useState } from "react";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";

const Themetoggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light'); // กำหนดค่าเริ่มต้นของธีมเป็น 'light' ถ้าไม่มีค่าใน localStorage
  const [image, setImage] = useState(localStorage.getItem('image') || (theme === 'dark' ? '/photo/S__8544261_0.jpg' : '/photo/S__8544260_0.jpg')); // กำหนดรูปภาพตามธีมปัจจุบัน หรือจะใช้จาก localStorage ถ้ามี

  const themetoggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'; // เปลี่ยนธีม
    setTheme(newTheme); // ตั้งค่าธีมใหม่
    localStorage.setItem('theme', newTheme); // บันทึกธีมใน localStorage

    const newImage = newTheme === 'dark' ? '/photo/S__8544261_0.jpg' : '/photo/S__8544260_0.jpg'; // เปลี่ยนรูปภาพตามธีมใหม่
    setImage(newImage); // ตั้งค่ารูปภาพใหม่
    localStorage.setItem('image', newImage); // บันทึกรูปภาพใน localStorage
  };
  
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme); // ตั้งค่า attribute ของ HTML element เพื่อเปลี่ยนธีม
  }, [theme]);
  
  return (
    <div className="nav_ac" onClick={themetoggle}>
      <WiMoonAltWaningCrescent4 />
    </div>
  );
};

export default Themetoggle;
