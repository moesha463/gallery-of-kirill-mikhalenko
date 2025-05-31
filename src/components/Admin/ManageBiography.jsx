import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/config";

const ManageBiography = () => {
    const { t } = useTranslation();
    const [events, setEvents] = useState([]);
    const [newEvent, setNewEvent] = useState({ year: "", event_en: "", event_ru: "" });
    const [texts, setTexts] = useState([]);
    const [newText, setNewText] = useState({ key: "", value_en: "", value_ru: "" });
    const [documents, setDocuments] = useState([]);
    const [newDocument, setNewDocument] = useState({
        title_en: "",
        title_ru: "",
        description_en: "",
        description_ru: "",
        image: "",
        imageAlt_en: "",
        imageAlt_ru: "",
    });

    useEffect(() => {
        const fetchData = async () => {
            // Получение событий
            const eventsSnap = await getDocs(collection(db, "biographyEvents"));
            setEvents(eventsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));

            // Получение текстов
            const textsSnap = await getDocs(collection(db, "biographyTexts"));
            setTexts(textsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));

            // Получение документов
            const docsSnap = await getDocs(collection(db, "biographyDocuments"));
            setDocuments(docsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        };
        fetchData();
    }, []);

    const handleAddEvent = async () => {
        if (newEvent.year && newEvent.event_en && newEvent.event_ru) {
            const docRef = await addDoc(collection(db, "biographyEvents"), newEvent);
            setEvents([...events, { id: docRef.id, ...newEvent }]);
            setNewEvent({ year: "", event_en: "", event_ru: "" });
        }
    };

    const handleUpdateEvent = async (id, updatedEvent) => {
        await updateDoc(doc(db, "biographyEvents", id), updatedEvent);
        setEvents(events.map(e => e.id === id ? { ...e, ...updatedEvent } : e));
    };

    const handleDeleteEvent = async (id) => {
        await deleteDoc(doc(db, "biographyEvents", id));
        setEvents(events.filter(e => e.id !== id));
    };

    const handleAddText = async () => {
        if (newText.key && newText.value_en && newText.value_ru) {
            const docRef = await addDoc(collection(db, "biographyTexts"), newText);
            setTexts([...texts, { id: docRef.id, ...newText }]);
            setNewText({ key: "", value_en: "", value_ru: "" });
        }
    };

    const handleUpdateText = async (id, updatedText) => {
        await updateDoc(doc(db, "biographyTexts", id), updatedText);
        setTexts(texts.map(t => t.id === id ? { ...t, ...updatedText } : t));
    };

    const handleDeleteText = async (id) => {
        await deleteDoc(doc(db, "biographyTexts", id));
        setTexts(texts.filter(t => t.id !== id));
    };

    const handleAddDocument = async () => {
        if (newDocument.title_en && newDocument.title_ru && newDocument.image) {
            const docRef = await addDoc(collection(db, "biographyDocuments"), {
                ...newDocument,
                imageAlt_en: newDocument.imageAlt_en || newDocument.title_en,
                imageAlt_ru: newDocument.imageAlt_ru || newDocument.title_ru,
            });
            setDocuments([...documents, { id: docRef.id, ...newDocument }]);
            setNewDocument({
                title_en: "",
                title_ru: "",
                description_en: "",
                description_ru: "",
                image: "",
                imageAlt_en: "",
                imageAlt_ru: "",
            });
        }
    };

    const handleUpdateDocument = async (id, updatedDoc) => {
        await updateDoc(doc(db, "biographyDocuments", id), updatedDoc);
        setDocuments(documents.map(d => d.id === id ? { ...d, ...updatedDoc } : d));
    };

    const handleDeleteDocument = async (id) => {
        await deleteDoc(doc(db, "biographyDocuments", id));
        setDocuments(documents.filter(d => d.id !== id));
    };

    return (
        <div className="space-y-8 p-6">
            <h2 className="text-3xl font-bold">{t("admin.biography")}</h2>

            {/* Управление событиями */}
            <div className="bg-white p-6 rounded shadow-md">
                <h3 className="text-xl font-semibold mb-4">{t("admin.events")}</h3>
                <div className="space-y-4">
                    {events.map(event => (
                        <div key={event.id} className="flex flex-col space-y-2 border-b pb-4">
                            <div className="flex space-x-2">
                                <input
                                    type="text"
                                    value={event.year}
                                    onChange={(e) => handleUpdateEvent(event.id, { ...event, year: e.target.value })}
                                    className="border p-2 rounded w-1/4"
                                    placeholder="Год"
                                />
                                <input
                                    type="text"
                                    value={event.event_en}
                                    onChange={(e) => handleUpdateEvent(event.id, { ...event, event_en: e.target.value })}
                                    className="border p-2 rounded flex-1"
                                    placeholder="Событие (EN)"
                                />
                                <input
                                    type="text"
                                    value={event.event_ru}
                                    onChange={(e) => handleUpdateEvent(event.id, { ...event, event_ru: e.target.value })}
                                    className="border p-2 rounded flex-1"
                                    placeholder="Событие (RU)"
                                />
                                <button
                                    onClick={() => handleDeleteEvent(event.id)}
                                    className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                                >
                                    {t("admin.delete")}
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="flex flex-col space-y-2">
                        <h4 className="text-lg font-medium">Добавить событие</h4>
                        <div className="flex space-x-2">
                            <input
                                type="text"
                                value={newEvent.year}
                                onChange={(e) => setNewEvent({ ...newEvent, year: e.target.value })}
                                className="border p-2 rounded w-1/4"
                                placeholder="Год"
                            />
                            <input
                                type="text"
                                value={newEvent.event_en}
                                onChange={(e) => setNewEvent({ ...newEvent, event_en: e.target.value })}
                                className="border p-2 rounded flex-1"
                                placeholder="Событие (EN)"
                            />
                            <input
                                type="text"
                                value={newEvent.event_ru}
                                onChange={(e) => setNewEvent({ ...newEvent, event_ru: e.target.value })}
                                className="border p-2 rounded flex-1"
                                placeholder="Событие (RU)"
                            />
                            <button
                                onClick={handleAddEvent}
                                className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
                            >
                                {t("admin.add")}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Управление документами */}
            <div className="bg-white p-6 rounded shadow-md">
                <h3 className="text-xl font-semibold mb-4">{t("admin.documents")}</h3>
                <div className="space-y-4">
                    {documents.map(doc => (
                        <div key={doc.id} className="flex flex-col space-y-2 border-b pb-4">
                            <div className="flex space-x-2 items-center">
                                <img src={doc.image} alt={doc.imageAlt_en} className="w-16 h-16 object-contain" />
                                <div className="flex flex-col space-y-2 flex-1">
                                    <input
                                        type="text"
                                        value={doc.title_en}
                                        onChange={(e) => handleUpdateDocument(doc.id, { ...doc, title_en: e.target.value })}
                                        className="border p-2 rounded"
                                        placeholder="Заголовок (EN)"
                                    />
                                    <input
                                        type="text"
                                        value={doc.title_ru}
                                        onChange={(e) => handleUpdateDocument(doc.id, { ...doc, title_ru: e.target.value })}
                                        className="border p-2 rounded"
                                        placeholder="Заголовок (RU)"
                                    />
                                    <input
                                        type="text"
                                        value={doc.description_en}
                                        onChange={(e) => handleUpdateDocument(doc.id, { ...doc, description_en: e.target.value })}
                                        className="border p-2 rounded"
                                        placeholder="Описание (EN)"
                                    />
                                    <input
                                        type="text"
                                        value={doc.description_ru}
                                        onChange={(e) => handleUpdateDocument(doc.id, { ...doc, description_ru: e.target.value })}
                                        className="border p-2 rounded"
                                        placeholder="Описание (RU)"
                                    />
                                    <input
                                        type="text"
                                        value={doc.image}
                                        onChange={(e) => handleUpdateDocument(doc.id, { ...doc, image: e.target.value })}
                                        className="border p-2 rounded"
                                        placeholder="URL изображения"
                                    />
                                    <input
                                        type="text"
                                        value={doc.imageAlt_en}
                                        onChange={(e) => handleUpdateDocument(doc.id, { ...doc, imageAlt_en: e.target.value })}
                                        className="border p-2 rounded"
                                        placeholder="Alt текст (EN)"
                                    />
                                    <input
                                        type="text"
                                        value={doc.imageAlt_ru}
                                        onChange={(e) => handleUpdateDocument(doc.id, { ...doc, imageAlt_ru: e.target.value })}
                                        className="border p-2 rounded"
                                        placeholder="Alt текст (RU)"
                                    />
                                </div>
                                <button
                                    onClick={() => handleDeleteDocument(doc.id)}
                                    className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                                >
                                    {t("admin.delete")}
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="flex flex-col space-y-2">
                        <h4 className="text-lg font-medium">Добавить документ</h4>
                        <div className="flex flex-col space-y-2">
                            <input
                                type="text"
                                value={newDocument.title_en}
                                onChange={(e) => setNewDocument({ ...newDocument, title_en: e.target.value })}
                                className="border p-2 rounded"
                                placeholder="Заголовок (EN)"
                            />
                            <input
                                type="text"
                                value={newDocument.title_ru}
                                onChange={(e) => setNewDocument({ ...newDocument, title_ru: e.target.value })}
                                className="border p-2 rounded"
                                placeholder="Заголовок (RU)"
                            />
                            <input
                                type="text"
                                value={newDocument.description_en}
                                onChange={(e) => setNewDocument({ ...newDocument, description_en: e.target.value })}
                                className="border p-2 rounded"
                                placeholder="Описание (EN)"
                            />
                            <input
                                type="text"
                                value={newDocument.description_ru}
                                onChange={(e) => setNewDocument({ ...newDocument, description_ru: e.target.value })}
                                className="border p-2 rounded"
                                placeholder="Описание (RU)"
                            />
                            <input
                                type="text"
                                value={newDocument.image}
                                onChange={(e) => setNewDocument({ ...newDocument, image: e.target.value })}
                                className="border p-2 rounded"
                                placeholder="URL изображения"
                            />
                            <input
                                type="text"
                                value={newDocument.imageAlt_en}
                                onChange={(e) => setNewDocument({ ...newDocument, imageAlt_en: e.target.value })}
                                className="border p-2 rounded"
                                placeholder="Alt текст (EN)"
                            />
                            <input
                                type="text"
                                value={newDocument.imageAlt_ru}
                                onChange={(e) => setNewDocument({ ...newDocument, imageAlt_ru: e.target.value })}
                                className="border p-2 rounded"
                                placeholder="Alt текст (RU)"
                            />
                            <button
                                onClick={handleAddDocument}
                                className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
                            >
                                {t("admin.add")}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageBiography;