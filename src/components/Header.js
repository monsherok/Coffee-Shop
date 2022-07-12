const Header = () => {
   return (
      <header className='header'>
        <div className="header__menu">
          <a href={'#coffee'} className="header__menu-logo">
          <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_4_40)">
<path d="M0.0541455 26.9849C0.600445 31.5459 6.09707 34.985 12.8399 34.985C18.9019 34.985 24.0514 32.1874 25.3643 28.1815L25.3655 28.1795C25.5709 27.5611 25.6769 26.9145 25.6798 26.263C25.6767 26.0667 25.663 25.8709 25.6388 25.6763L25.6319 25.6141V25.6139C25.3931 23.8875 24.5379 22.3061 23.2236 21.1614C24.72 21.82 26.3324 22.1736 27.967 22.2024C29.3241 22.2278 30.6635 21.8915 31.8475 21.2284L31.8481 21.2275C32.3026 20.9693 32.7216 20.653 33.094 20.2862C33.3742 20.001 33.6244 19.6881 33.8415 19.3524L33.8421 19.3515C36.3037 15.6474 34.7286 9.42236 30.1779 4.87185C25.9639 0.657908 20.1703 -1.05623 16.4007 0.796691C15.7945 1.08993 15.2408 1.48092 14.7618 1.95398C14.5871 2.13295 14.4241 2.32274 14.2733 2.52251L14.273 2.52279C11.4689 6.13373 12.9653 12.6554 17.6799 17.3701C18.1459 17.8346 18.636 18.2743 19.1478 18.6875C17.1336 17.9212 14.9952 17.5325 12.8399 17.541C6.81977 17.541 1.54087 20.4327 0.287826 24.4167C0.0986018 25.0137 0.00142488 25.6364 0 26.263C0.00341972 26.5044 0.0213732 26.7452 0.0538605 26.9846L0.0541455 26.9849ZM12.8399 33.8178C7.1626 33.8178 2.31657 31.1222 1.35193 27.5608C1.37501 27.5631 1.39866 27.5657 1.42118 27.5679C1.62978 27.5916 1.82841 27.6175 2.01393 27.6472C2.041 27.6514 2.06608 27.6563 2.09287 27.6608C2.26613 27.6896 2.43142 27.7207 2.59072 27.7537C2.61722 27.7592 2.64487 27.7643 2.67137 27.77C2.84178 27.8065 3.00622 27.8447 3.1678 27.8843C3.20285 27.8928 3.23762 27.9017 3.2721 27.9102C3.4277 27.9492 3.58158 27.9886 3.7369 28.029C5.24157 28.4559 6.80096 28.6585 8.36463 28.6301C9.92658 28.6588 11.4843 28.4556 12.9867 28.0276C14.3927 27.6238 15.8515 27.4334 17.314 27.4628C18.7771 27.4334 20.2365 27.6238 21.6431 28.0273C21.7893 28.0652 21.9375 28.1034 22.0879 28.1413C22.1227 28.1502 22.1575 28.1587 22.1925 28.1675C22.3521 28.2071 22.516 28.2459 22.6864 28.2832C22.7072 28.2878 22.7294 28.2921 22.7505 28.2966C22.9081 28.3303 23.0725 28.3625 23.2441 28.393C23.2746 28.3984 23.3037 28.4041 23.3344 28.4092C23.5205 28.4411 23.7172 28.4699 23.9249 28.4961C23.9434 28.4987 23.9588 28.5018 23.9776 28.5041C22.4692 31.6217 17.9484 33.8178 12.8399 33.8178ZM29.3526 5.69743C33.1761 9.52124 34.7768 14.7531 33.2465 18.0329C33.2308 18.0147 33.2149 17.9964 33.1997 17.9782C33.045 17.7961 32.9017 17.6203 32.774 17.4533C32.7626 17.4385 32.7529 17.4245 32.7418 17.41C32.6201 17.2492 32.509 17.0942 32.4049 16.9432C32.3881 16.9187 32.3705 16.8936 32.3539 16.8694C32.2479 16.7129 32.1488 16.5599 32.0533 16.4083C32.035 16.3792 32.0171 16.3504 31.9989 16.3214C31.9068 16.1737 31.8168 16.0267 31.7264 15.8782C30.9447 14.5246 29.967 13.2943 28.8254 12.2271C27.7248 11.1194 26.4655 10.1812 25.0893 9.44373C23.7995 8.75494 22.6206 7.87693 21.5915 6.83848C20.522 5.84163 19.6078 4.69004 18.8794 3.42246C18.8053 3.30021 18.7298 3.17653 18.6528 3.05199L18.5939 2.9571C18.5112 2.8243 18.426 2.68979 18.3348 2.55158C18.3248 2.53619 18.3137 2.52023 18.3035 2.50484C18.2211 2.38059 18.1333 2.25321 18.0401 2.1224C18.0185 2.09219 17.9977 2.06227 17.9755 2.03149C17.8714 1.88787 17.7603 1.73996 17.6395 1.58665C17.6315 1.5761 17.6249 1.5667 17.6167 1.55644C20.9517 0.434486 25.7425 2.08706 29.3526 5.69743ZM15.5871 2.77927C15.8675 2.50142 16.1812 2.25919 16.5209 2.05857C16.5309 2.07025 16.5392 2.08136 16.5489 2.09305C16.6777 2.24979 16.7948 2.39968 16.9039 2.54502C16.9216 2.56867 16.9407 2.59318 16.9581 2.61655C17.0672 2.76474 17.1675 2.90808 17.2624 3.04829C17.2813 3.07622 17.3001 3.10386 17.3183 3.1315C17.4109 3.27057 17.4995 3.40764 17.5842 3.54329C17.5996 3.5678 17.6147 3.59231 17.6298 3.61682C17.7147 3.75389 17.7979 3.89011 17.8817 4.02832C18.662 5.38054 19.6383 6.60992 20.7788 7.67631C21.8793 8.78372 23.1387 9.72187 24.5148 10.4597C25.8046 11.1482 26.9836 12.0262 28.0126 13.0649C29.0835 14.0629 29.9992 15.2156 30.7293 16.4846C30.7894 16.5832 30.8498 16.6824 30.9111 16.7824C30.9319 16.8161 30.9536 16.8506 30.9747 16.8845C31.0177 16.9537 31.0607 17.023 31.1052 17.0931C31.1314 17.1344 31.159 17.1763 31.1858 17.2179C31.2277 17.2831 31.2702 17.3484 31.3146 17.4151C31.3443 17.4595 31.3753 17.5051 31.4064 17.5505C31.4506 17.6154 31.4962 17.6813 31.5432 17.7479C31.5774 17.7961 31.6127 17.8451 31.6483 17.8944C31.6968 17.9608 31.7467 18.0284 31.7985 18.0968C31.8376 18.1483 31.8775 18.2008 31.9185 18.2535C31.9724 18.3227 32.0294 18.3937 32.0872 18.4652C32.1314 18.5199 32.1755 18.5747 32.2226 18.6308C32.2836 18.7043 32.3491 18.7801 32.4149 18.8562C32.4656 18.9146 32.5149 18.9725 32.5682 19.0323C32.5813 19.0471 32.5925 19.0608 32.6059 19.0756C32.5016 19.2107 32.389 19.3395 32.2687 19.4609C32.0801 19.6479 31.8749 19.8177 31.6557 19.9685L31.6355 19.9462C31.5982 19.9038 31.5648 19.8636 31.5292 19.8223C31.4617 19.7439 31.3944 19.6661 31.3323 19.5909C31.2938 19.5441 31.2579 19.4991 31.2212 19.4535C31.1673 19.3863 31.114 19.3196 31.0639 19.2546C31.0279 19.2082 30.9937 19.1628 30.9595 19.1173C30.9131 19.0554 30.8678 18.9941 30.8242 18.9337C30.792 18.8896 30.7606 18.8457 30.7301 18.8021C30.6874 18.7414 30.6458 18.6812 30.6056 18.6217C30.578 18.5809 30.55 18.5402 30.5233 18.4997C30.4825 18.4379 30.4426 18.3766 30.4033 18.3156C30.3793 18.2786 30.3551 18.2412 30.3317 18.2042C30.2896 18.1378 30.2485 18.0717 30.2078 18.0058C30.1884 17.9748 30.1687 17.9434 30.1496 17.9121C30.0918 17.818 30.0342 17.724 29.977 17.6297C29.1944 16.276 28.2164 15.0455 27.0745 13.978C25.9739 12.8703 24.7146 11.9321 23.3384 11.1946C22.0486 10.5061 20.8697 9.62782 19.8406 8.58937C18.7703 7.59167 17.8552 6.43951 17.1257 5.17136C17.0356 5.02346 16.9436 4.87356 16.8495 4.72196C16.8296 4.69004 16.8099 4.65812 16.7897 4.62592C16.6936 4.47317 16.5916 4.317 16.4836 4.15685C16.4611 4.12322 16.438 4.08959 16.4146 4.05568C16.3021 3.89182 16.181 3.72311 16.0482 3.54728C16.0259 3.51822 16.002 3.48801 15.9795 3.45866C15.8356 3.27143 15.6814 3.07878 15.5064 2.87417L15.5019 2.86847C15.5301 2.83769 15.5583 2.80805 15.5871 2.77927ZM18.5052 16.5448C14.4603 12.4995 12.9322 7.09695 14.7926 3.84109C14.8065 3.85819 14.8213 3.87558 14.835 3.89239C14.9604 4.04685 15.0775 4.19617 15.1844 4.34009C15.2046 4.36716 15.2229 4.39338 15.2425 4.42017C15.3389 4.55211 15.4295 4.68092 15.5144 4.80659C15.5295 4.82939 15.5457 4.85219 15.5606 4.8747C15.6543 5.0152 15.7427 5.15313 15.8284 5.2902C15.8473 5.32012 15.8655 5.34976 15.884 5.3794C15.9661 5.51191 16.047 5.64414 16.1282 5.77779C16.9096 7.13029 17.8868 8.36025 19.0279 9.4272C20.1285 10.5346 21.3878 11.4728 22.7639 12.2103C24.0537 12.8991 25.2327 13.7771 26.2617 14.8155C27.3329 15.8141 28.2491 16.9671 28.9798 18.2361C29.0696 18.3837 29.1613 18.5328 29.2551 18.6838C29.277 18.7191 29.2987 18.7542 29.3212 18.7895C29.419 18.9446 29.5218 19.103 29.6321 19.2657C29.6544 19.2985 29.678 19.3321 29.7008 19.3655C29.8151 19.531 29.9362 19.7009 30.0716 19.879L30.0889 19.9029C30.2263 20.0828 30.3819 20.2731 30.5478 20.4695C30.5691 20.4945 30.5848 20.5168 30.6067 20.5424C27.2939 21.9134 22.2504 20.2891 18.5052 16.5448ZM12.8399 18.7083C18.5676 18.7083 23.4233 21.4333 24.3433 25.0317C24.3205 25.0291 24.2971 25.0268 24.2749 25.0245C24.0628 25.0009 23.8611 24.9747 23.673 24.9447C23.6479 24.9407 23.6245 24.9362 23.5997 24.9322C23.4268 24.9037 23.2618 24.8726 23.103 24.8399C23.0714 24.8333 23.0386 24.8273 23.0076 24.8205C22.8403 24.7849 22.6787 24.7472 22.52 24.7085C22.4784 24.6982 22.4365 24.688 22.3952 24.6774C22.2438 24.6395 22.0936 24.6013 21.9423 24.562C20.4377 24.1351 18.878 23.9325 17.314 23.961C15.7521 23.9322 14.1944 24.1351 12.692 24.5634C11.2859 24.967 9.82713 25.1573 8.36463 25.1283C6.90127 25.1573 5.44191 24.967 4.03498 24.5637C3.8905 24.5261 3.7443 24.4885 3.59612 24.4512C3.55565 24.4409 3.51518 24.4309 3.47415 24.4207C3.31627 24.3816 3.1544 24.3434 2.9857 24.3067C2.95919 24.3007 2.93127 24.2953 2.90419 24.2896C2.74831 24.2565 2.58559 24.2249 2.41603 24.195C2.38468 24.1895 2.35476 24.1836 2.32284 24.1781C2.13561 24.1465 1.93698 24.118 1.72838 24.0918C1.70729 24.0892 1.68962 24.0858 1.66825 24.0833C3.145 20.9303 7.68154 18.7083 12.8399 18.7083ZM1.28211 25.2149L1.30405 25.2175C1.52975 25.2405 1.73807 25.2685 1.9367 25.2987C1.96491 25.3032 1.99483 25.3069 2.02276 25.3115C2.21427 25.3423 2.39437 25.3759 2.56849 25.4118C2.60354 25.4189 2.63888 25.4261 2.67336 25.4338C2.8415 25.4697 3.00422 25.507 3.16352 25.546C3.20028 25.5552 3.23648 25.5643 3.27295 25.5734C3.42941 25.6127 3.58472 25.6526 3.74089 25.6934C5.24385 26.1211 6.8021 26.324 8.36463 26.2955C9.92658 26.3243 11.4843 26.1211 12.9867 25.6931C14.3927 25.2893 15.8515 25.0989 17.314 25.1283C18.7791 25.0992 20.2402 25.2893 21.6491 25.6919C21.7525 25.7187 21.8565 25.7455 21.9614 25.7723C22.0013 25.7826 22.0421 25.7925 22.0823 25.8025C22.1541 25.8208 22.2262 25.8387 22.2997 25.8564C22.3424 25.8666 22.3866 25.8769 22.4302 25.8872C22.5029 25.9043 22.5764 25.9211 22.6513 25.9376C22.6978 25.9479 22.7451 25.9578 22.7927 25.9678C22.8674 25.9838 22.9437 25.9991 23.0215 26.0143C23.0717 26.0239 23.1224 26.0336 23.1737 26.043C23.2541 26.0576 23.337 26.0718 23.4208 26.0855C23.4732 26.094 23.5254 26.1026 23.5792 26.1109C23.6699 26.1248 23.7645 26.1374 23.8602 26.1502C23.9118 26.157 23.9622 26.1642 24.0158 26.1704C24.1275 26.1838 24.2446 26.1958 24.3638 26.2075C24.4068 26.2115 24.447 26.2163 24.4912 26.2203L24.5122 26.2226C24.5125 26.236 24.5125 26.2496 24.5125 26.263C24.5114 26.6375 24.4669 27.0105 24.38 27.3747L24.3564 27.3719C24.1346 27.3488 23.93 27.3212 23.7345 27.2912C23.7043 27.2864 23.6727 27.2824 23.6431 27.2776C23.4547 27.2471 23.2772 27.2137 23.1059 27.1784C23.0688 27.171 23.0321 27.1633 22.9956 27.1556C22.8303 27.12 22.6696 27.0829 22.5126 27.0444C22.4747 27.035 22.437 27.0253 22.3994 27.0159C22.245 26.9772 22.0919 26.9379 21.9375 26.8977C20.4345 26.4696 18.8766 26.2667 17.314 26.2955C15.7521 26.2667 14.1944 26.4696 12.692 26.898C11.2859 27.3015 9.82713 27.4919 8.36463 27.4628C6.89985 27.4916 5.43877 27.3015 4.03014 26.8991C3.92441 26.8717 3.81811 26.8441 3.71096 26.8167C3.67933 26.8088 3.64656 26.8008 3.61436 26.7925C3.53713 26.7731 3.45933 26.7538 3.37982 26.7344C3.33593 26.7238 3.29062 26.7136 3.24588 26.703C3.17578 26.6865 3.1051 26.6703 3.033 26.6543C2.98342 26.6432 2.93241 26.6327 2.8814 26.6218C2.81101 26.607 2.73919 26.5925 2.66624 26.5782C2.61152 26.5674 2.55624 26.5571 2.49981 26.5469C2.42629 26.5335 2.35049 26.5207 2.27383 26.5078C2.21455 26.4981 2.15528 26.4882 2.09372 26.479C2.01478 26.4668 1.93214 26.4557 1.84921 26.4449C1.78538 26.4363 1.7224 26.4275 1.65628 26.4195C1.56481 26.4087 1.46848 26.399 1.37216 26.3893C1.30947 26.383 1.24934 26.3759 1.18408 26.3702L1.16926 26.3688C1.16812 26.3334 1.16726 26.2981 1.16726 26.263C1.16783 25.9105 1.20631 25.5591 1.28211 25.2149Z" fill="white"/>
<path d="M6.6884 30.1179C6.44845 29.9939 6.22047 29.8637 6.00446 29.7272C5.73174 29.5565 5.37238 29.6389 5.20111 29.911C5.02984 30.1832 5.11106 30.5428 5.38264 30.7149C5.62544 30.868 5.88164 31.0144 6.15151 31.1546C6.43791 31.3028 6.79014 31.1908 6.93833 30.9047C7.08652 30.6183 6.97481 30.2661 6.6884 30.1179Z" fill="white"/>
<path d="M20.4496 29.1678C18.6255 30.6394 15.8518 31.4832 12.8399 31.4832C11.3175 31.4955 9.8029 31.2678 8.35151 30.8084C8.04545 30.7092 7.71687 30.8768 7.61713 31.1828C7.51739 31.4889 7.68438 31.8178 7.99016 31.9181C9.5581 32.4157 11.1947 32.6627 12.8399 32.6505C16.1137 32.6505 19.1544 31.7123 21.1826 30.0763C21.4334 29.8737 21.4727 29.5063 21.2703 29.2556C21.068 29.0045 20.7004 28.9652 20.4496 29.1678Z" fill="white"/>
<path d="M16.6894 9.21292C16.625 8.98294 16.5702 8.75581 16.5255 8.53182C16.4622 8.21578 16.1547 8.01088 15.8387 8.07415C15.5227 8.13741 15.3178 8.4449 15.381 8.76094C15.4315 9.01258 15.493 9.26792 15.5654 9.52753C15.6523 9.83787 15.9744 10.0188 16.2847 9.9322C16.595 9.84528 16.7763 9.52325 16.6894 9.21292Z" fill="white"/>
<path d="M28.1331 19.2919C28.1531 18.9702 27.9083 18.6932 27.5866 18.6735C25.1865 18.5256 22.3393 17.0774 20.1561 14.8939C19.0569 13.8081 18.1422 12.5502 17.4482 11.1698C17.3046 10.8817 16.9552 10.7643 16.6668 10.9071C16.3784 11.0498 16.2602 11.3992 16.4024 11.6879C17.1527 13.182 18.1419 14.5436 19.3308 15.7192C21.7428 18.1315 24.8023 19.6715 27.5147 19.8385C27.527 19.8394 27.5392 19.8397 27.5512 19.8397C27.8593 19.8391 28.114 19.5994 28.1331 19.2919Z" fill="white"/>
          </g>
          <defs>
          <clipPath id="clip0_4_40">
          <rect width="35" height="35" fill="white"/>
          </clipPath>
          </defs>
          </svg>
          <p>Coffee house</p>
          </a>
          <nav className="header__menu-nav">
            <ul>
              <li className="header__menu-item"> <a href={'#coffee'}>Our coffee</a></li>
              <li className="header__menu-item"><a href={'#pleasure'}>For your pleasure</a></li>
            </ul>
          </nav>
        </div>
        <div className="header__content container">
          <h1 className="header__content-title">Everything You Love About Coffee</h1>
          <div className="header__content-decoration">
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_4_68)">
<g clipPath="url(#clip0_4_68)">
<path d="M9.38842 26.5504C8.03446 24.1621 8.95551 20.4168 11.7569 17.6151C14.9384 14.4341 19.3369 13.6759 21.5827 15.9214C21.585 15.9242 21.5878 15.9274 21.5912 15.9304C21.1418 17.2383 19.7102 20.0203 15.42 21.5245C11.4894 22.9031 9.9735 25.0955 9.38842 26.5504ZM20.2604 19.5906C19.2344 20.6175 17.776 21.6253 15.7102 22.3503C11.5176 23.8203 10.3463 26.2275 10.0194 27.3931C10.0352 27.4089 10.048 27.4255 10.0629 27.4401C12.3084 29.6857 16.7075 28.9273 19.8882 25.7464C22.7187 22.9159 23.6292 19.1225 22.2142 16.7383C21.8736 17.5324 21.2812 18.5697 20.2604 19.5906ZM11.5846 9.2452C16.1138 9.6421 18.564 7.69641 19.5119 6.69018C19.5103 6.68618 19.5091 6.68167 19.5079 6.67805C18.387 3.70713 14.0663 2.58599 9.85742 4.17405C6.15073 5.57274 3.76806 8.60592 4.0179 11.3398C5.15056 10.2555 7.43511 8.88223 11.5846 9.2452ZM13.9169 14.9334C17.6624 13.5205 20.0541 10.4387 19.7471 7.6831C19.1096 8.26655 18.1423 8.96808 16.7917 9.47781C15.4339 9.99005 13.6897 10.3081 11.5089 10.1171C7.08339 9.72905 5.02376 11.4401 4.24526 12.3682C4.25317 12.3888 4.25871 12.4091 4.26588 12.4285C5.38702 15.4002 9.70784 16.5218 13.9169 14.9334ZM27.0248 8.73791C29.7422 5.09207 29.3734 1.9848 29.015 0.649692C29.0109 0.649248 29.0068 0.647695 29.003 0.646808C25.8859 0.0399204 22.6621 3.12782 21.8023 7.54313C21.0451 11.4328 22.3749 15.0528 24.8322 16.2767C24.5046 14.7432 24.5365 12.0782 27.0248 8.73791ZM29.9836 0.971325C30.1453 1.82058 30.2341 3.0121 29.9582 4.42862C29.6811 5.85356 29.0348 7.50468 27.7271 9.26028C25.0722 12.8223 25.446 15.4731 25.8269 16.623C25.8486 16.6275 25.869 16.6331 25.8891 16.6375C29.0065 17.2444 32.2299 14.157 33.0896 9.74125C33.8552 5.81186 32.4892 2.15715 29.9836 0.971325Z" fill="white"/>
</g>
</g>
<defs>
<filter id="filter0_d_4_68" x="0" y="0" width="37.302" height="37.302" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_68"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_68" result="shape"/>
</filter>
<clipPath id="clip0_4_68">
<rect width="29.302" height="29.302" fill="white" transform="translate(4)"/>
</clipPath>
</defs>
          </svg>
          </div>
          <h2 className="header__content-text">We makes every day full of energy and taste</h2>
          <h2 className="header__content-text-with-shadow">Want to try our beans?</h2>
          <a href={'#more'} className="header__content-link">More</a>
        </div>
      </header>
   )
}

export default Header;