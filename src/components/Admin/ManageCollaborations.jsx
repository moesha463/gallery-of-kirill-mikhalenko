import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/config";

const ManageCollaborations = () => {
    const { t } = useTranslation();
    const [sections, setSections] = useState([]);
    const [newSection, setNewSection] = useState({ name_en: "", name_ru: "" });
    const [newPhoto, setNewPhoto] = useState({ sectionId: "", original: "", thumbnail: "" });

    useEffect(() => {
        const fetchSections = async () => {
            const sectionsSnap = await getDocs(collection(db, "collaborationSections"));
            const sectionsData = await Promise.all(sectionsSnap.docs.map(async (sectionDoc) => {
                const photosSnap = await getDocs(collection(db, `collaborationSections/${sectionDoc.id}/photos`));
                const photos = photosSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                return {
                    id: sectionDoc.id,
                    ...sectionDoc.data(),
                    photos,
                };
            }));
            setSections(sectionsData);
        };
        fetchSections();
    }, []);

    const handleAddSection = async () => {
        if (newSection.name_en && newSection.name_ru) {
            const docRef = await addDoc(collection(db, "collaborationSections"), newSection);
            setSections([...sections, { id: docRef.id, ...newSection, photos: [] }]);
            setNewSection({ name_en: "", name_ru: "" });
        }
    };

    const handleUpdateSection = async (id, updatedSection) => {
        await updateDoc(doc(db, "collaborationSections", id), updatedSection);
        setSections(sections.map(s => (s.id === id ? { ...s, ...updatedSection } : s)));
    };

    const handleDeleteSection = async (id) => {
        await deleteDoc(doc(db, "collaborationSections", id));
        setSections(sections.filter(s => s.id !== id));
    };

    const handleAddPhoto = async () => {
        if (newPhoto.sectionId && newPhoto.original && newPhoto.thumbnail) {
            const docRef = await addDoc(collection(db, `collaborationSections/${newPhoto.sectionId}/photos`), {
                original: newPhoto.original,
                thumbnail: newPhoto.thumbnail,
            });
            setSections(sections.map(s => {
                if (s.id === newPhoto.sectionId) {
                    return { ...s, photos: [...s.photos, { id: docRef.id, original: newPhoto.original, thumbnail: newPhoto.thumbnail }] };
                }
                return s;
            }));
            setNewPhoto({ sectionId: "", original: "", thumbnail: "" });
        }
    };

    const handleDeletePhoto = async (sectionId, photoId) => {
        await deleteDoc(doc(db, `collaborationSections/${sectionId}/photos`, photoId));
        setSections(sections.map(s => {
            if (s.id === sectionId) {
                return { ...s, photos: s.photos.filter(p => p.id !== photoId) };
            }
            return s;
        }));
    };

    return (
        <div className="space-y-8 p-6">
            <h2 className="text-3xl font-bold">{t("admin.collaborations")}</h2>
            <div className="bg-white p-6 rounded shadow-md">
                <h3 className="text-xl font-semibold mb-4">Collaboration</h3>
                <div className="space-y-4">
                    {sections.map((section) => (
                        <div key={section.id} className="space-y-2 border-b pb-4">
                            <div className="flex space-x-2">
                                <input
                                    type="text"
                                    value={section.name_en}
                                    onChange={(e) => handleUpdateSection(section.id, { ...section, name_en: e.target.value })}
                                    className="border p-2 rounded flex-1"
                                    placeholder="Name (EN)"
                                />
                                <input
                                    type="text"
                                    value={section.name_ru}
                                    onChange={(e) => handleUpdateSection(section.id, { ...section, name_ru: e.target.value })}
                                    className="border p-2 rounded flex-1"
                                    placeholder="Name (RU)"
                                />
                                <button
                                    onClick={() => handleDeleteSection(section.id)}
                                    className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                                >
                                    {t("admin.delete")}
                                </button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {section.photos.map((photo) => (
                                    <div key={photo.id} className="flex space-x-2 items-center">
                                        <img src={photo.thumbnail} alt="Photo" className="w-16 h-16 object-contain" />
                                        <input
                                            type="text"
                                            value={photo.original}
                                            disabled
                                            className="border p-2 rounded flex-1"
                                        />
                                        <button
                                            onClick={() => handleDeletePhoto(section.id, photo.id)}
                                            className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                                        >
                                            {t("admin.delete")}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className="flex flex-col space-y-2">
                        <h4 className="text-lg font-semibold">Add Section</h4>
                        <div className="flex space-x-2">
                            <input
                                type="text"
                                value={newSection.name_en}
                                onChange={(e) => setNewSection({ ...newSection, name_en: e.target.value })}
                                className="border p-2 rounded flex-1"
                                placeholder="Name (EN)"
                            />
                            <input
                                type="text"
                                value={newSection.name_ru}
                                onChange={(e) => setNewSection({ ...newSection, name_ru: e.target.value })}
                                className="border p-2 rounded flex-1"
                                placeholder="Name (RU)"
                            />
                            <button
                                onClick={handleAddSection}
                                className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
                            >
                                {t("admin.add")}
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <h4 className="text-lg font-semibold">Add Photo</h4>
                        <div className="flex flex-col space-y-2">
                            <select
                                value={newPhoto.sectionId}
                                onChange={(e) => setNewPhoto({ ...newPhoto, sectionId: e.target.value })}
                                className="border p-2 rounded"
                            >
                                <option value="">Select Section</option>
                                {sections.map((section) => (
                                    <option key={section.id} value={section.id}>{section.name_en}</option>
                                ))}
                            </select>
                            <input
                                type="text"
                                value={newPhoto.original}
                                onChange={(e) => setNewPhoto({ ...newPhoto, original: e.target.value })}
                                className="border p-2 rounded"
                                placeholder="Original URL"
                            />
                            <input
                                type="text"
                                value={newPhoto.thumbnail}
                                onChange={(e) => setNewPhoto({ ...newPhoto, thumbnail: e.target.value })}
                                className="border p-2 rounded"
                                placeholder="Thumbnail URL"
                            />
                            <button
                                onClick={handleAddPhoto}
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

export default ManageCollaborations;