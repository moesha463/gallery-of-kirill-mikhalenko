import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import "./Contacts.css";

const Contacts = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    sender_name: "",
    sender_email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!formData.sender_name.trim()) {
      newErrors.sender_name = "Введите имя";
    }

    if (!formData.sender_email.trim()) {
      newErrors.sender_email = "Введите email";
    } else if (!/\S+@\S+\.\S+/.test(formData.sender_email)) {
      newErrors.sender_email = "Некорректный email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Введите сообщение";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      await emailjs.send(
        "service_w17j875",
        "template_904wryh",
        {
          sender_name: formData.sender_name,
          sender_email: formData.sender_email,
          message: formData.message,
        },
        "04sVqQbpCscisgsqB"
      );
      setFormData({ sender_name: "", sender_email: "", message: "" });
    } catch (error) {
      console.error("Ошибка отправки:", error);
    }
  };

  return (
    <motion.div className="container mx-auto px-6 py-12 bg-white text-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center mb-12">
        <img
          src="/assets/images/icon.PNG"
          alt="Logo"
          className="w-36 mb-4"
        />
        <div className="bg-white border-6 border-black flex items-center justify-center">
          <h1 className="text-3xl font-regular uppercase text-center px-4 py-2 w-full">
            {t("header.contacts")}
          </h1>
        </div>
      </div>

      {/* <div className="max-w-lg mx-auto bg-white p-6 mb-6 text-center">
        <h2 className="text-4xl font-bold uppercase mb-4">Контакты для связи:</h2>
        <hr className="border-t-2 border-black w-1/4 mx-auto mb-6" />
        <div className="relative">
          <table className="w-full text-lg">
            <tbody>
              <tr>
                <td className="pr-4 text-right w-1/4">Почта</td>
                <td className="w-4">
                  <span className="contact-dot"></span>
                </td>
                <td className="pl-4">
                  <a
                    href="mailto:mioikirillartist@gmail.com"
                    className="text-black hover:text-gray-600"
                  >
                    mioikirillartist@gmail.com
                  </a>
                </td>
              </tr>
              <tr>
                <td className="pr-4 text-right w-1/4">WhatsApp</td>
                <td className="w-4">
                  <span className="contact-dot"></span>
                </td>
                <td className="pl-4">
                  <a
                    href="https://wa.me/375445986591"
                    className="text-black hover:text-gray-600"
                  >
                    +375445986591
                  </a>
                </td>
              </tr>
              <tr>
                <td className="pr-4 text-right w-1/4">Instagram</td>
                <td className="w-4">
                  <span className="contact-dot"></span>
                </td>
                <td className="pl-4">
                  <a
                    href="https://instagram.com/mikhalenkakiryll"
                    className="text-black hover:text-gray-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @mikhalenkakiryll
                  </a>
                </td>
              </tr>
              <tr>
                <td className="pr-4 text-right w-1/4">Сайт</td>
                <td className="w-4">
                  <span className="contact-dot"></span>
                </td>
                <td className="pl-4">
                  <a
                    href="https://kirylmikhalenka.com"
                    className="text-black hover:text-gray-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    kirylmikhalenka.com
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="vertical-line"></div>
        </div>
      </div> */}

      <div className="max-w-lg mx-auto bg-white p-6">
        <h2 className="text-2xl font-semibold text-center mb-4">{t("contact.form.title")}</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="sender_name"
              value={formData.sender_name}
              onChange={handleInputChange}
              placeholder={t("contact.form.name")}
              className="w-full p-2 border-2 border-gray-300"
            />
            {errors.sender_name && <p className="text-red-500 text-sm">{errors.sender_name}</p>}
          </div>

          <div>
            <input
              type="email"
              name="sender_email"
              value={formData.sender_email}
              onChange={handleInputChange}
              placeholder={t("contact.form.email")}
              className="w-full p-2 border-2 border-gray-300"
            />
            {errors.sender_email && <p className="text-red-500 text-sm">{errors.sender_email}</p>}
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder={t("contact.form.message")}
              rows="5"
              className="w-full p-2 border-2 border-gray-300 resize-none"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          <button type="submit" className="w-full bg-black text-white p-2 uppercase hover:bg-gray-800 transition">
            {t("contact.form.submit")}
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contacts;