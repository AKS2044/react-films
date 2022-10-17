import React from 'react';
import photoUser from '../img/Rick.png';
import rec from '../img/recommended.jpg';

const Profile = () => {
    return (
        <div className='profile'>
            <div className='profile__info'>
                <div className='profile__info-left'>
                    <img className='profile__info-left-photo' src={photoUser} alt="Фото" title="Фото"></img>
                    <button className='profile__info-left-change-photo'>
                        Сменить
                        <svg className='profile__info-left-change-photo-avatar' width="24" height="24" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.35566 22.2505C5.65554 22.1228 6.27676 21.7514 7.54971 20.8129L10.3099 18.7778L10.3099 16.741C9.39175 16.0921 8.76071 15.0639 8.64493 13.8845C8.38156 13.7302 8.20468 13.4442 8.20468 13.117V11.2456C8.20468 10.9417 8.37517 10.6776 8.62573 10.5437V8.01754C8.62573 6.13138 10.1548 4.60234 12.0409 4.60234H14.0058C15.892 4.60234 17.4211 6.13138 17.4211 8.01754V10.5708C17.6458 10.7113 17.7953 10.961 17.7953 11.2456V13.117C17.7953 13.4232 17.6405 13.6932 17.4048 13.8531C17.2972 15.0457 16.6632 16.0864 15.7368 16.741V18.7977L18.0994 20.8129C19.5096 22.0157 20.2252 22.287 20.5747 22.3077C18.509 23.9908 15.8724 25 13 25C10.0953 25 7.43159 23.9679 5.35566 22.2505Z" fill="#D9D9D9"/>
                        <path d="M7.54971 20.8129L7.253 20.4104L7.54971 20.8129ZM5.35566 22.2505L5.15972 21.7905L4.40421 22.1123L5.03694 22.6358L5.35566 22.2505ZM10.3099 18.7778L10.6067 19.1802L10.8099 19.0303L10.8099 18.7778H10.3099ZM10.3099 16.741L10.8099 16.741L10.8099 16.4821L10.5985 16.3327L10.3099 16.741ZM8.64493 13.8845L9.14254 13.8356L9.11763 13.5819L8.89766 13.4531L8.64493 13.8845ZM8.62573 10.5437L8.86136 10.9847L9.12573 10.8434V10.5437H8.62573ZM17.4211 10.5708H16.9211V10.8478L17.156 10.9947L17.4211 10.5708ZM17.4048 13.8531L17.1241 13.4393L16.9281 13.5723L16.9068 13.8082L17.4048 13.8531ZM15.7368 16.741L15.4483 16.3327L15.2368 16.4821V16.741H15.7368ZM15.7368 18.7977H15.2368V19.0284L15.4124 19.1781L15.7368 18.7977ZM18.0994 20.8129L17.7749 21.1933V21.1933L18.0994 20.8129ZM20.5747 22.3077L20.8905 22.6953L21.8856 21.8845L20.6043 21.8085L20.5747 22.3077ZM24.5 13C24.5 19.3513 19.3513 24.5 13 24.5V25.5C19.9036 25.5 25.5 19.9036 25.5 13H24.5ZM13 24.5C6.64873 24.5 1.5 19.3513 1.5 13H0.5C0.5 19.9036 6.09644 25.5 13 25.5V24.5ZM1.5 13C1.5 6.64873 6.64873 1.5 13 1.5V0.5C6.09644 0.5 0.5 6.09644 0.5 13H1.5ZM13 1.5C19.3513 1.5 24.5 6.64873 24.5 13H25.5C25.5 6.09644 19.9036 0.5 13 0.5V1.5ZM7.253 20.4104C5.97685 21.3513 5.39889 21.6886 5.15972 21.7905L5.5516 22.7105C5.91219 22.5569 6.57668 22.1515 7.84643 21.2153L7.253 20.4104ZM10.0132 18.3753L7.253 20.4104L7.84643 21.2153L10.6067 19.1802L10.0132 18.3753ZM9.80994 16.741L9.80995 18.7778L10.8099 18.7778L10.8099 16.741L9.80994 16.741ZM8.14732 13.9333C8.27779 15.2624 8.9889 16.4197 10.0214 17.1493L10.5985 16.3327C9.79461 15.7646 9.24363 14.8654 9.14254 13.8356L8.14732 13.9333ZM7.70468 13.117C7.70468 13.629 7.98199 14.0756 8.39221 14.3159L8.89766 13.4531C8.78112 13.3848 8.70468 13.2595 8.70468 13.117H7.70468ZM7.70468 11.2456V13.117H8.70468V11.2456H7.70468ZM8.3901 10.1027C7.98329 10.3201 7.70468 10.7499 7.70468 11.2456H8.70468C8.70468 11.1334 8.76705 11.0351 8.86136 10.9847L8.3901 10.1027ZM8.12573 8.01754V10.5437H9.12573V8.01754H8.12573ZM12.0409 4.10234C9.87863 4.10234 8.12573 5.85524 8.12573 8.01754H9.12573C9.12573 6.40752 10.4309 5.10234 12.0409 5.10234V4.10234ZM14.0058 4.10234H12.0409V5.10234H14.0058V4.10234ZM17.9211 8.01754C17.9211 5.85524 16.1682 4.10234 14.0058 4.10234V5.10234C15.6159 5.10234 16.9211 6.40752 16.9211 8.01754H17.9211ZM17.9211 10.5708V8.01754H16.9211V10.5708H17.9211ZM18.2953 11.2456C18.2953 10.7815 18.0509 10.3749 17.6861 10.1468L17.156 10.9947C17.2407 11.0477 17.2953 11.1405 17.2953 11.2456H18.2953ZM18.2953 13.117V11.2456H17.2953V13.117H18.2953ZM17.6855 14.2669C18.0525 14.0179 18.2953 13.5959 18.2953 13.117H17.2953C17.2953 13.2505 17.2285 13.3685 17.1241 13.4393L17.6855 14.2669ZM16.0254 17.1493C17.067 16.4132 17.7816 15.2418 17.9028 13.898L16.9068 13.8082C16.8129 14.8495 16.2593 15.7595 15.4483 16.3327L16.0254 17.1493ZM16.2368 18.7977V16.741H15.2368V18.7977H16.2368ZM18.4239 20.4324L16.0613 18.4173L15.4124 19.1781L17.7749 21.1933L18.4239 20.4324ZM20.6043 21.8085C20.5324 21.8043 20.3409 21.7675 19.977 21.5661C19.6169 21.3668 19.1134 21.0206 18.4239 20.4324L17.7749 21.1933C18.4956 21.8079 19.055 22.1988 19.4927 22.441C19.9265 22.6811 20.2675 22.7903 20.5451 22.8068L20.6043 21.8085ZM20.2589 21.9201C18.2791 23.5332 15.7531 24.5 13 24.5V25.5C15.9916 25.5 18.7389 24.4485 20.8905 22.6953L20.2589 21.9201ZM13 24.5C10.2159 24.5 7.66398 23.5113 5.67438 21.8653L5.03694 22.6358C7.19921 24.4246 9.97468 25.5 13 25.5V24.5Z" fill="#D9D9D9"/>
                        </svg>
                    </button>
                    <button className='profile__info-left-change-profile'>Редактировать профиль</button>
                </div>
                <div className='profile__info-right'>
                    <div className='profile__info-right-one'>Логин: <span className='profile__info-right-one-span'>Toster2022</span></div>
                    <div className='profile__info-right-two'>Дата регистрации: <span className='profile__info-right-two-span'>15 сентября 2022 13:39</span></div>
                    <div className='profile__info-right-one'>Группа: <span className='profile__info-right-one-span'>Посетители</span></div>
                    <div className='profile__info-right-two'>Всего комментариев: <span className='profile__info-right-two-span'>0</span></div>
                    <div className='profile__info-right-one'>Город: <span className='profile__info-right-one-span'>Минск</span></div>
                </div>
            </div>
            <div className='profile__watch'>
                <div className='profile__watch-title'>Избранное:</div>
                <div className='profile__watch-block'>
                    <div className='profile__watch-block-item'>
                        <a href='/'><img className='profile__watch-block-item-poster' src={rec} alt="Постер" title="Постер" /></a>
                        <div className='profile__watch-block-item-text'>Название фильма(год)</div>
                    </div>
                    <div className='profile__watch-block-item'>
                        <a href='/'><img className='profile__watch-block-item-poster' src={rec} alt="Постер" title="Постер" /></a>
                        <div className='profile__watch-block-item-text'>Название фильма(год)</div>
                    </div>
                    <div className='profile__watch-block-item'>
                        <a href='/'><img className='profile__watch-block-item-poster' src={rec} alt="Постер" title="Постер" /></a>
                        <div className='profile__watch-block-item-text'>Название фильма(год)</div>
                    </div>
                    <div className='profile__watch-block-item'>
                        <a href='/'><img className='profile__watch-block-item-poster' src={rec} alt="Постер" title="Постер" /></a>
                        <div className='profile__watch-block-item-text'>Название фильма(год)</div>
                    </div>
                    <div className='profile__watch-block-item'>
                        <a href='/'><img className='profile__watch-block-item-poster' src={rec} alt="Постер" title="Постер" /></a>
                        <div className='profile__watch-block-item-text'>Название фильма(год)</div>
                    </div>
                    <div className='profile__watch-block-item'>
                        <a href='/'><img className='profile__watch-block-item-poster' src={rec} alt="Постер" title="Постер" /></a>
                        <div className='profile__watch-block-item-text'>Название фильма(год)</div>
                    </div>
                </div>
                <button className='profile__watch-button'>Смотреть позже</button>
            </div>
            <div className='profile__watch'>
                <div className='profile__watch-title'>Смотреть позже:</div>
                <div className='profile__watch-block'>
                    <div className='profile__watch-block-item'>
                        <a href='/'><img className='profile__watch-block-item-poster' src={rec} alt="Постер" title="Постер" /></a>
                        <div className='profile__watch-block-item-text'>Название фильма(год)</div>
                    </div>
                    <div className='profile__watch-block-item'>
                        <a href='/'><img className='profile__watch-block-item-poster' src={rec} alt="Постер" title="Постер" /></a>
                        <div className='profile__watch-block-item-text'>Название фильма(год)</div>
                    </div>
                    <div className='profile__watch-block-item'>
                        <a href='/'><img className='profile__watch-block-item-poster' src={rec} alt="Постер" title="Постер" /></a>
                        <div className='profile__watch-block-item-text'>Название фильма(год)</div>
                    </div>
                    <div className='profile__watch-block-item'>
                        <a href='/'><img className='profile__watch-block-item-poster' src={rec} alt="Постер" title="Постер" /></a>
                        <div className='profile__watch-block-item-text'>Название фильма(год)</div>
                    </div>
                    <div className='profile__watch-block-item'>
                        <a href='/'><img className='profile__watch-block-item-poster' src={rec} alt="Постер" title="Постер" /></a>
                        <div className='profile__watch-block-item-text'>Название фильма(год)</div>
                    </div>
                    <div className='profile__watch-block-item'>
                        <a href='/'><img className='profile__watch-block-item-poster' src={rec} alt="Постер" title="Постер" /></a>
                        <div className='profile__watch-block-item-text'>Название фильма(год)</div>
                    </div>
                </div>
                <button className='profile__watch-button'>Смотреть позже</button>
            </div>
        </div>
    );
};

export default Profile;