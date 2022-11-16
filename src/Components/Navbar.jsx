import { Link, Route, Routes } from "react-router-dom";
import Index from "../Pages/Index";

export default function Navbar() {
    return (
        <nav className="col-1 position-relative">
            <div className="position-fixed d-flex flex-column align-items-center">
                <li>
                    <Link to="/" id="logo-icon">
                        <svg width="25" height="25" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.0601 0.587295L8.86476 2.13795C8.60683 2.19295 8.37555 2.3347 8.20947 2.53956C8.04339 2.74441 7.95254 3.00001 7.95207 3.26373V15.6468C7.42708 15.4645 6.87516 15.3717 6.3194 15.3724C3.80633 15.3724 1.76898 17.2177 1.76898 19.4941C1.76898 21.7704 3.80633 23.6158 6.31947 23.6158C8.04656 23.6158 9.77399 22.677 10.492 21.0764C11.116 19.6854 10.8698 18.0132 10.8698 16.5213V6.62223L20.779 4.32072C20.7449 1.87246 18.4654 0.0689939 16.0601 0.587361L16.0601 0.587295Z"
                                fill="#FACD66" />
                            <path
                                d="M16.0565 11.998V25.2556C16.0563 25.2872 16.0488 25.3184 16.0345 25.3466C16.0202 25.3748 15.9996 25.3993 15.9742 25.4182C15.9488 25.437 15.9194 25.4497 15.8882 25.4552C15.8571 25.4607 15.8251 25.4589 15.7948 25.4499C15.349 25.3225 14.8875 25.2581 14.4238 25.2585C11.9107 25.2585 9.87341 27.1039 9.87341 29.3802C9.87341 31.6566 11.9107 33.502 14.4238 33.502C16.1509 33.502 17.8784 32.5632 18.5964 30.9626C19.2204 29.5716 18.9743 27.8993 18.9743 26.4075V15.6245C18.9744 15.5481 19.0004 15.474 19.048 15.4143C19.0957 15.3545 19.1621 15.3127 19.2366 15.2956L28.8834 13.055C28.9331 13.0433 28.9848 13.043 29.0346 13.0541C29.0844 13.0651 29.1311 13.0873 29.1712 13.1189C29.2112 13.1506 29.2436 13.1908 29.266 13.2367C29.2883 13.2826 29.3 13.3329 29.3002 13.384V24.2421C29.3 24.2737 29.2925 24.3048 29.2782 24.3331C29.2639 24.3613 29.2433 24.3858 29.2179 24.4046C29.1925 24.4235 29.1631 24.4362 29.1319 24.4417C29.1008 24.4472 29.0688 24.4454 29.0385 24.4364C28.5926 24.309 28.1312 24.2446 27.6675 24.245C25.1544 24.245 23.1171 26.0904 23.1171 28.3667C23.1171 30.6431 25.1544 32.4884 27.6674 32.4884C29.1883 32.4884 30.7005 31.7011 31.5534 30.413C32.3799 29.1648 32.2183 27.8537 32.2179 26.4434C32.2171 23.9282 32.2171 21.413 32.2179 18.8979V8.84266C32.2174 8.69091 32.1829 8.54119 32.1171 8.40447C32.0512 8.26776 31.9556 8.14751 31.8372 8.05253C31.7189 7.95755 31.5808 7.89026 31.433 7.85557C31.2853 7.82089 31.1317 7.81969 30.9834 7.85208L16.9692 10.8722C16.7113 10.9272 16.48 11.069 16.3139 11.2738C16.1478 11.4787 16.057 11.7343 16.0565 11.998Z"
                                fill="#A4C7C6" />
                            <path
                                d="M27.3081 13.384C27.3079 13.3329 27.2962 13.2826 27.2739 13.2367C27.2515 13.1908 27.2191 13.1506 27.1791 13.1189C27.139 13.0873 27.0923 13.0651 27.0425 13.0541C26.9927 13.043 26.941 13.0433 26.8913 13.055L17.2445 15.2956C17.17 15.3127 17.1036 15.3545 17.0559 15.4143C17.0083 15.474 16.9823 15.5481 16.9822 15.6245V26.4075C16.9822 27.8993 17.2283 29.5716 16.6043 30.9626C16.0241 32.256 14.7847 33.1169 13.419 33.3998C13.7497 33.4676 14.0864 33.5018 14.4239 33.502C16.151 33.502 17.8785 32.5632 18.5965 30.9626C19.2205 29.5716 18.9744 27.8993 18.9744 26.4075V15.6245C18.9745 15.5481 19.0005 15.474 19.0481 15.4143C19.0958 15.3545 19.1622 15.3127 19.2367 15.2956L27.3081 13.4209V13.384ZM14.0623 25.2727C13.8491 25.2878 13.6371 25.3165 13.4276 25.3588C13.5546 25.3847 13.6799 25.4147 13.8027 25.4499C13.8316 25.4584 13.862 25.4604 13.8917 25.4557C13.9214 25.451 13.9497 25.4398 13.9745 25.4228C13.9994 25.4058 14.0201 25.3836 14.0353 25.3576C14.0505 25.3316 14.0597 25.3026 14.0623 25.2726V25.2727ZM32.218 26.4434C32.2172 23.9282 32.2172 21.413 32.218 18.8979V8.84266C32.2175 8.69091 32.183 8.54119 32.1172 8.40447C32.0513 8.26776 31.9557 8.14751 31.8373 8.05253C31.719 7.95755 31.5809 7.89026 31.4331 7.85557C31.2854 7.82089 31.1318 7.81969 30.9835 7.85208L29.8857 8.08868C29.9927 8.18298 30.0784 8.29901 30.137 8.42902C30.1956 8.55902 30.2259 8.70004 30.2258 8.84266V26.4434C30.2262 27.8536 30.3878 29.1648 29.5613 30.413C28.8792 31.4207 27.8345 32.1263 26.6449 32.3826C26.9813 32.4528 27.324 32.4883 27.6676 32.4884C29.1883 32.4884 30.7006 31.7011 31.5535 30.413C32.38 29.1648 32.2184 27.8537 32.218 26.4434ZM27.306 24.2591C27.0928 24.2742 26.8808 24.303 26.6712 24.3453C26.7983 24.3712 26.9236 24.4012 27.0464 24.4364C27.0752 24.4449 27.1056 24.4469 27.1353 24.4422C27.165 24.4375 27.1933 24.4263 27.2182 24.4093C27.243 24.3923 27.2638 24.3701 27.279 24.3441C27.2942 24.3181 27.3034 24.2891 27.306 24.2591Z"
                                fill="#9CBCBB" />
                        </svg>
                    </Link>
                </li>
                {/* First nav section  */}
                <ul className="p-3 d-flex flex-column align-items-center mt-5 nav-con">
                    <li className="mb-4">
                        <Link to="/" id="home-icon">
                            <svg width="18" height="18" viewBox="0 0 18 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.38171 18.0503V15.239C6.3817 14.5266 6.96099 13.9478 7.67852 13.9433H10.3132C11.0339 13.9433 11.6182 14.5234 11.6182 15.239V18.0421C11.6182 18.66 12.1203 19.1622 12.7427 19.1667H14.5401C15.3796 19.1688 16.1855 18.8392 16.7799 18.2507C17.3742 17.6621 17.7083 16.8629 17.7083 16.0294V8.0437C17.7083 7.37045 17.4077 6.73183 16.8875 6.29989L10.781 1.45142C9.7136 0.603372 8.18905 0.630768 7.15323 1.51661L1.17805 6.29989C0.633305 6.7191 0.307716 7.35961 0.291626 8.0437V16.0213C0.291626 17.7584 1.71006 19.1667 3.45978 19.1667H5.21623C5.51587 19.1688 5.80399 19.0522 6.01664 18.8426C6.2293 18.633 6.34889 18.3478 6.34888 18.0503H6.38171Z"
                                    fill="#FACD66" />
                            </svg>

                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link to="/playlist">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.5834 4.35416H14.6667V2.98832C14.6667 2.22749 14.0434 1.60416 13.2825 1.60416H8.71754C7.95671 1.60416 7.33337 2.22749 7.33337 2.98832V4.35416H6.41671C5.40837 4.35416 4.58337 5.17916 4.58337 6.18749V6.30666C4.87671 6.22416 5.17921 6.18749 5.50004 6.18749H16.5C16.8209 6.18749 17.1234 6.22416 17.4167 6.30666V6.18749C17.4167 5.17916 16.5917 4.35416 15.5834 4.35416Z" />
                                <path
                                    d="M12.7692 15.5192C12.4759 15.5192 12.2467 15.7575 12.2467 16.0417C12.2467 16.3258 12.485 16.5642 12.7692 16.5642C13.0534 16.5642 13.2917 16.3258 13.2917 16.0417C13.2917 15.7575 13.0534 15.5192 12.7692 15.5192Z" />
                                <path
                                    d="M8.31413 16.3258C8.02079 16.3258 7.79163 16.5642 7.79163 16.8483C7.79163 17.1325 8.02996 17.3708 8.31413 17.3708C8.59829 17.3708 8.83663 17.1325 8.83663 16.8483C8.83663 16.5642 8.60746 16.3258 8.31413 16.3258Z" />
                                <path
                                    d="M17.4167 7.68167C17.1234 7.59917 16.8209 7.5625 16.5 7.5625H5.50004C5.17921 7.5625 4.87671 7.59917 4.58337 7.68167C3.00671 8.09417 1.83337 9.53333 1.83337 11.2292V16.7292C1.83337 18.7458 3.48337 20.3958 5.50004 20.3958H16.5C18.5167 20.3958 20.1667 18.7458 20.1667 16.7292V11.2292C20.1667 9.53333 18.9934 8.09417 17.4167 7.68167ZM14.6667 12.1733V16.0417C14.6667 17.0867 13.8142 17.9392 12.7692 17.9392C11.7242 17.9392 10.8717 17.0867 10.8717 16.0417C10.8717 14.9967 11.7242 14.1442 12.7692 14.1442C12.9525 14.1442 13.1267 14.1808 13.2917 14.2267V13.0717L10.2209 13.9058V16.8483C10.2209 16.8575 10.2209 16.8667 10.2117 16.8758C10.2025 17.9117 9.35004 18.755 8.31421 18.755C7.26921 18.755 6.41671 17.9025 6.41671 16.8483C6.41671 15.7942 7.26921 14.9508 8.31421 14.9508C8.49754 14.9508 8.67171 14.9875 8.84587 15.0333V13.3833V11.9625C8.84587 11.1742 9.34087 10.5325 10.0925 10.3308L12.5217 9.66167C13.3009 9.45083 13.7959 9.6525 14.0709 9.86333C14.3459 10.0742 14.6667 10.4867 14.6667 11.3025V12.1733Z" />
                            </svg>



                        </Link>
                    </li>
                    <li className="mb-4">
                        <a href="">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.10413 1.83333V4.58333H6.41663C6.17829 4.58333 5.94913 4.5925 5.72913 4.62916V1.83333C5.72913 1.45749 6.04079 1.14583 6.41663 1.14583C6.79246 1.14583 7.10413 1.45749 7.10413 1.83333Z" />
                                <path
                                    d="M15.5834 4.58333H6.41671C6.17837 4.58333 5.94921 4.5925 5.72921 4.62916C3.36421 4.90416 1.83337 6.65499 1.83337 9.16666V15.5833C1.83337 18.3333 3.66671 20.1667 6.41671 20.1667H15.5834C18.3334 20.1667 20.1667 18.3333 20.1667 15.5833V9.16666C20.1667 6.41666 18.3334 4.58333 15.5834 4.58333ZM7.22337 14.6667C5.95837 14.6667 4.93171 13.64 4.93171 12.375C4.93171 11.11 5.95837 10.0833 7.22337 10.0833C8.48837 10.0833 9.51504 11.11 9.51504 12.375C9.51504 13.64 8.48837 14.6667 7.22337 14.6667ZM13.1817 14.8958H12.7234C12.3475 14.8958 12.0359 14.5842 12.0359 14.2083C12.0359 13.8325 12.3475 13.5208 12.7234 13.5208H13.1817C13.5575 13.5208 13.8692 13.8325 13.8692 14.2083C13.8692 14.5842 13.5575 14.8958 13.1817 14.8958ZM16.39 14.8958H15.9317C15.5559 14.8958 15.2442 14.5842 15.2442 14.2083C15.2442 13.8325 15.5559 13.5208 15.9317 13.5208H16.39C16.7659 13.5208 17.0775 13.8325 17.0775 14.2083C17.0775 14.5842 16.7659 14.8958 16.39 14.8958ZM16.39 11.2292H12.7234C12.3475 11.2292 12.0359 10.9175 12.0359 10.5417C12.0359 10.1658 12.3475 9.85416 12.7234 9.85416H16.39C16.7659 9.85416 17.0775 10.1658 17.0775 10.5417C17.0775 10.9175 16.7659 11.2292 16.39 11.2292Z" />
                            </svg>

                        </a>
                    </li>
                    <li className="mb-4">
                        <a href="">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.3125 7.205H1.83337V14.8408C1.83337 14.8958 1.83337 14.9508 1.84254 14.9967H10.3125V7.205Z" />
                                <path
                                    d="M7.04919 5.83H10.3125V1.83333H7.07669V5.71999C7.07669 5.75666 7.05836 5.79333 7.04919 5.83Z" />
                                <path
                                    d="M5.70168 5.72V1.98C3.66668 2.40166 2.33751 3.75833 1.95251 5.83H5.72001C5.71085 5.79333 5.70168 5.75666 5.70168 5.72Z" />
                                <path d="M14.8683 1.83333H11.6875V5.83H14.8683V1.83333Z" />
                                <path
                                    d="M16.2341 5.83001H20.0475C19.6625 3.74001 18.315 2.37417 16.2433 1.97084V5.80251C16.2433 5.81167 16.2341 5.82084 16.2341 5.83001Z" />
                                <path
                                    d="M16.2433 20.0292C18.2508 19.635 19.5708 18.3517 20.0016 16.3717H16.2433V20.0292Z" />
                                <path d="M14.8683 16.3717H11.6875V20.1667H14.8683V16.3717Z" />
                                <path
                                    d="M11.6875 14.9967H20.1575C20.1667 14.9508 20.1667 14.8958 20.1667 14.8408V7.205H11.6875V14.9967Z" />
                                <path d="M10.3125 16.3717H7.07666V20.1667H10.3125V16.3717Z" />
                                <path
                                    d="M1.99829 16.3717C2.42912 18.3333 3.73079 19.6167 5.70162 20.02V16.3717H1.99829Z" />
                            </svg>


                        </a>
                    </li>
                </ul>
                {/* Second nav section  */}
                <ul className="p-3  p-3 d-flex flex-column align-items-center mt-5 nav-con">
                    <li className="mb-4">
                        <a href="">
                            <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path
                                        d="M11 1.83333C8.59837 1.83333 6.64587 3.78583 6.64587 6.18749C6.64587 8.54333 8.48837 10.45 10.89 10.5325C10.9634 10.5233 11.0367 10.5233 11.0917 10.5325C11.11 10.5325 11.1192 10.5325 11.1375 10.5325C11.1467 10.5325 11.1467 10.5325 11.1559 10.5325C13.5025 10.45 15.345 8.54333 15.3542 6.18749C15.3542 3.78583 13.4017 1.83333 11 1.83333Z" />
                                    <path
                                        d="M15.6566 12.9708C13.0991 11.2658 8.9283 11.2658 6.35246 12.9708C5.1883 13.75 4.54663 14.8042 4.54663 15.9317C4.54663 17.0592 5.1883 18.1042 6.3433 18.8742C7.62663 19.7358 9.3133 20.1667 11 20.1667C12.6866 20.1667 14.3733 19.7358 15.6566 18.8742C16.8116 18.095 17.4533 17.05 17.4533 15.9133C17.4441 14.7858 16.8116 13.7408 15.6566 12.9708Z" />
                                </g>
                            </svg>



                        </a>
                    </li>
                    <li className="mb-4">
                        <a href="">
                            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.53505 0.833336C11.8107 0.833336 13.6667 2.6575 13.6667 4.90334V9.29417H8.07078C7.66974 9.29417 7.35263 9.60584 7.35263 10C7.35263 10.385 7.66974 10.7058 8.07078 10.7058H13.6667V15.0875C13.6667 17.3333 11.8107 19.1667 9.51639 19.1667H4.97436C2.68936 19.1667 0.833374 17.3425 0.833374 15.0967V4.9125C0.833374 2.6575 2.69868 0.833336 4.98369 0.833336H9.53505ZM15.9952 6.83769C16.2702 6.55352 16.7194 6.55352 16.9944 6.82852L19.6711 9.49602C19.8086 9.63352 19.8819 9.80769 19.8819 10.0002C19.8819 10.1835 19.8086 10.3669 19.6711 10.4952L16.9944 13.1627C16.8569 13.3002 16.6736 13.3735 16.4994 13.3735C16.3161 13.3735 16.1327 13.3002 15.9952 13.1627C15.7202 12.8877 15.7202 12.4385 15.9952 12.1635L17.4619 10.706H13.6669V9.29435H17.4619L15.9952 7.83685C15.7202 7.56185 15.7202 7.11269 15.9952 6.83769Z" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
           
        </nav>

    )
}