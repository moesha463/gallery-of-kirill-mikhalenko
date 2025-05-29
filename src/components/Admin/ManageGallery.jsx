import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/config";

const ManageGallery = () => {
    const { t } = useTranslation();
    const [artworks, setArtworks] = useState([]);
    const [staticImages, setStaticImages] = useState([]);
    const [newArtwork, setNewArtwork] = useState({
        title_en: "",
        title_ru: "",
        image_url: "",
        wall_image_url: "",
        dimensions: "",
        medium_en: "",
        medium_ru: "",
        year: "",
    });
    const [newStaticImage, setNewStaticImage] = useState({ url: "", alt: "" });

    useEffect(() => {
        const fetchData = async () => {
            const artworksSnap = await getDocs(collection(db, "galleryArtworks"));
            setArtworks(artworksSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));

            const staticImagesSnap = await getDocs(collection(db, "galleryStaticImages"));
            setStaticImages(staticImagesSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        };
        fetchData();
    }, []);

    const handleAddArtwork = async () => {
        if (
            newArtwork.title_en &&
            newArtwork.title_ru &&
            newArtwork.image_url &&
            newArtwork.wall_image_url &&
            newArtwork.dimensions &&
            newArtwork.medium_en &&
            newArtwork.medium_ru &&
            newArtwork.year
        ) {
            const docRef = await addDoc(collection(db, "galleryArtworks"), newArtwork);
            setArtworks([...artworks, { id: docRef.id, ...newArtwork }]);
            setNewArtwork({
                title_en: "",
                title_ru: "",
                image_url: "",
                wall_image_url: "",
                dimensions: "",
                medium_en: "",
                medium_ru: "",
                year: "",
            });
        }
    };

    const handleUpdateArtwork = async (id, updatedArtwork) => {
        await updateDoc(doc(db, "galleryArtworks", id), updatedArtwork);
        setArtworks(artworks.map(a => (a.id === id ? { ...a, ...updatedArtwork } : a)));
    };

    const handleDeleteArtwork = async (id) => {
        await deleteDoc(doc(db, "galleryArtworks", id));
        setArtworks(artworks.filter(a => a.id !== id));
    };

    const handleAddStaticImage = async () => {
        if (newStaticImage.url && newStaticImage.alt) {
            const docRef = await addDoc(collection(db, "galleryStaticImages"), newStaticImage);
            setStaticImages([...staticImages, { id: docRef.id, ...newStaticImage }]);
            setNewStaticImage({ url: "", alt: "" });
        }
    };

    const handleUpdateStaticImage = async (id, updatedImage) => {
        await updateDoc(doc(db, "galleryStaticImages", id), updatedImage);
        setStaticImages(staticImages.map(img => (img.id === id ? { ...img, ...updatedImage } : img)));
    };

    const handleDeleteStaticImage = async (id) => {
        await deleteDoc(doc(db, "galleryStaticImages", id));
        setStaticImages(staticImages.filter(img => img.id !== id));
    };

    return (
        <div className="space-y-8 p-6">
            <h2 className="text-3xl font-bold">{t("admin.gallery")}</h2>
            <div className="bg-white p-6 rounded shadow-md">
                <h3 className="text-xl font-semibold mb-4">Artworks</h3>
                <div className="space-y-4">
                    {artworks.map((artwork) => (
                        <div key={artwork.id} className="space-y-2 border-b pb-4">
                            <div className="flex space-x-2 items-center">
                                <img src={artwork.image_url} alt={artwork.title_en} className="w-16 h-16 object-contain" />
                                <div className="flex flex-col space-y-2 flex-1">
                                    <input
                                        type="text"
                                        value={artwork.title_en}
                                        onChange={(e) => handleUpdateArtwork(artwork.id, { ...artwork, title_en: e.target.value })}
                                        className="border p-2 rounded"
                                        placeholder="Title (EN)"
                                    />
                                    <input
                                        type="text"
                                        value={artwork.title_ru}
                                        onChange={(e) => handleUpdateArtwork(artwork.id, { ...artwork, title_ru: e.target.value })}
                                        className="border p-2 rounded"
                                        placeholder="Title (RU)"
                                    />
                                    <input
                                        type="text"
                                        value={artwork.image_url}
                                        onChange={(e) => handleUpdateArtwork(artwork.id, { ...artwork, image_url: e.target.value })}
                                        className="border p-2 rounded"
                                        placeholder="Image URL"
                                    />
                                    <input
                                        type="text"
                                        value={artwork.wall_image_url}
                                        onChange={(e) => handleUpdateArtwork(artwork.id, { ...artwork, wall_image_url: e.target.value })}
                                        className="border p-2 rounded"
                                        placeholder="Wall Image URL"
                                    />
                                    <input
                                        type="text"
                                        value={artwork.dimensions}
                                        onChange={(e) => handleUpdateArtwork(artwork.id, { ...artwork, dimensions: e.target.value })}
                                        className="border p-2 rounded"
                                        placeholder="Dimensions"
                                    />
                                    <input
                                        type="text"
                                        value={artwork.medium_en}
                                        onChange={(e) => handleUpdateArtwork(artwork.id, { ...artwork, medium_en: e.target.value })}
                                        className="border p-2 rounded"
                                        placeholder="Medium (EN)"
                                    />
                                    <input
                                        type="text"
                                        value={artwork.medium_ru}
                                        onChange={(e) => handleUpdateArtwork(artwork.id, { ...artwork, medium_ru: e.target.value })}
                                        className="border p-2 rounded"
                                        placeholder="Medium (RU)"
                                    />
                                    <input
                                        type="text"
                                        value={artwork.year}
                                        onChange={(e) => handleUpdateArtwork(artwork.id, { ...artwork, year: e.target.value })}
                                        className="border p-2 rounded"
                                        placeholder="Year"
                                    />
                                </div>
                                <button
                                    onClick={() => handleDeleteArtwork(artwork.id)}
                                    className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                                >
                                    {t("admin.delete")}
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="flex flex-col space-y-2">
                        <h4 className="text-lg font-semibold">Add Artwork</h4>
                        <div className="flex flex-col space-y-2">
                            <input
                                type="text"
                                value={newArtwork.title_en}
                                onChange={(e) => setNewArtwork({ ...newArtwork, title_en: e.target.value })}
                                className="border p-2 rounded"
                                placeholder="Title (EN)"
                            />
                            <input
                                type="text"
                                value={newArtwork.title_ru}
                                onChange={(e) => setNewArtwork({ ...newArtwork, title_ru: e.target.value })}
                                className="border p-2 rounded"
                                placeholder="Title (RU)"
                            />
                            <input
                                type="text"
                                value={newArtwork.image_url}
                                onChange={(e) => setNewArtwork({ ...newArtwork, image_url: e.target.value })}
                                className="border p-2 rounded"
                                placeholder="Image URL"
                            />
                            <input
                                type="text"
                                value={newArtwork.wall_image_url}
                                onChange={(e) => setNewArtwork({ ...newArtwork, wall_image_url: e.target.value })}
                                className="border p-2 rounded"
                                placeholder="Wall Image URL"
                            />
                            <input
                                type="text"
                                value={newArtwork.dimensions}
                                onChange={(e) => setNewArtwork({ ...newArtwork, dimensions: e.target.value })}
                                className="border p-2 rounded"
                                placeholder="Dimensions"
                            />
                            <input
                                type="text"
                                value={newArtwork.medium_en}
                                onChange={(e) => setNewArtwork({ ...newArtwork, medium_en: e.target.value })}
                                className="border p-2 rounded"
                                placeholder="Medium (EN)"
                            />
                            <input
                                type="text"
                                value={newArtwork.medium_ru}
                                onChange={(e) => setNewArtwork({ ...newArtwork, medium_ru: e.target.value })}
                                className="border p-2 rounded"
                                placeholder="Medium (RU)"
                            />
                            <input
                                type="text"
                                value={newArtwork.year}
                                onChange={(e) => setNewArtwork({ ...newArtwork, year: e.target.value })}
                                className="border p-2 rounded"
                                placeholder="Year"
                            />
                            <button
                                onClick={handleAddArtwork}
                                className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
                            >
                                {t("admin.add")}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded shadow-md">
                <h3 className="text-xl font-semibold mb-4">Static Images</h3>
                <div className="space-y-4">
                    {staticImages.map((img) => (
                        <div key={img.id} className="flex items-center space-x-2 border-b pb-4">
                            <img src={img.url} alt={img.alt} className="w-16 h-16 object-contain" />
                            <input
                                type="text"
                                value={img.url}
                                onChange={(e) => handleUpdateStaticImage(img.id, { ...img, url: e.target.value })}
                                className="border p-2 rounded flex-1"
                                placeholder="URL"
                            />
                            <input
                                type="text"
                                value={img.alt}
                                onChange={(e) => handleUpdateStaticImage(img.id, { ...img, alt: e.target.value })}
                                className="border p-2 rounded flex-1"
                                placeholder="Alt text"
                            />
                            <button
                                onClick={() => handleDeleteStaticImage(img.id)}
                                className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                            >
                                {t("admin.delete")}
                            </button>
                        </div>
                    ))}
                    <div className="flex flex-col space-y-2">
                        <h4 className="text-lg font-semibold">Add Static Image</h4>
                        <div className="flex space-x-2">
                            <input
                                type="text"
                                value={newStaticImage.url}
                                onChange={(e) => setNewStaticImage({ ...newStaticImage, url: e.target.value })}
                                className="border p-2 rounded flex-1"
                                placeholder="URL"
                            />
                            <input
                                type="text"
                                value={newStaticImage.alt}
                                onChange={(e) => setNewStaticImage({ ...newStaticImage, alt: e.target.value })}
                                className="border p-2 rounded flex-1"
                                placeholder="Alt text"
                            />
                            <button
                                onClick={handleAddStaticImage}
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

export default ManageGallery;