export default function footer() {
    return (
        <div className="flex items-center justify-center h-16 px-6 bg-gradient-to-t from-purple-800 to-purple-950 text-white shadow-md">
            <p className="text-sm sm:text-base">
                &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
        </div>
    )
}
