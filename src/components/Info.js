import profile from "../images/profile_picture.jpg"

export default function Info() {
    return (
        <div className="top">
            <div className="profile">
                <img src={profile} className="pfp" alt="profile-picture"></img>
                <h1 className="name">Kristin Chauvin</h1>
                <p className="occupation">Logistics Management</p>
                <p className="location">Clifton, Arizona</p>
            </div>
            <form className="contact">
                <button className="facebook-button" type="submit" formAction="https://www.temporary-mail.net/" formTarget="_blank">
                    <svg className="facebook-icon" viewBox="0 0 512 512">
                        <path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z" />
                    </svg>
                    Facebook
                </button>
                <button className="linkedin-button" type="submit" formAction="https://www.linkedin.com" formTarget="_blank">
                    <svg className="linkedin-icon" viewBox="0 0 512 512">
                        <path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z" />
                    </svg>
                    LinkedIn
                </button>
            </form>
        </div>
    )
}