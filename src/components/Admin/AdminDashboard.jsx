import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useTranslation } from "react-i18next";

const AdminDashboard = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await signOut(auth);
        navigate("/admin/login");
    };

    return (
        <div className="min-h-screen flex">
            <aside className="w-64 bg-gray-800 text-white p-4">
                <h2 className="text-2xl font-bold mb-6">{t("admin.dashboardTitle")}</h2>
                <nav className="space-y-2">
                    <Link to="/admin/dashboard/biography" className="block p-2 hover:bg-gray-700 rounded">
                        {t("admin.biography")}
                    </Link>
                    <Link to="/admin/dashboard/gallery" className="block p-2 hover:bg-gray-700 rounded">
                        {t("admin.gallery")}
                    </Link>
                    <Link to="/admin/dashboard/exhibitions" className="block p-2 hover:bg-gray-700 rounded">
                        {t("admin.exhibitions")}
                    </Link>
                    <Link to="/admin/dashboard/collaborations" className="block p-2 hover:bg-gray-700 rounded">
                        {t("admin.collaborations")}
                    </Link>
                    <Link to="/admin/dashboard/publications" className="block p-2 hover:bg-gray-700 rounded">
                        {t("admin.publications")}
                    </Link>
                    <button
                        onClick={handleLogout}
                        className="w-full text-left p-2 hover:bg-gray-700 rounded"
                    >
                        {t("admin.logout")}
                    </button>
                </nav>
            </aside>
            <main className="flex-1 p-6 bg-gray-100">
                <Outlet />
            </main>
        </div>
    );
};

export default AdminDashboard;