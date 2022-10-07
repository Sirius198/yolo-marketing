export type ILogoProps = {
  xl?: boolean;
};

const defaultProps: ILogoProps = {
  xl: false,
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '26' : '18';
  const wsize = props.xl ? '198' : '140';
  const fontStyle = props.xl
    ? 'font-semibold text-2xl'
    : 'font-semibold text-lg';

  return (
    <span
      className={`inline-flex items-center text-gray-900 ${fontStyle}`}
    >
      {/* {AppConfig.site_name} */}

      <svg
        width={wsize}
        height={size}
        viewBox="0 0 198 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.512 25V14.248L0.352 1.16H4.608L11.136 11.752H9.632L16.128 1.16H20.384L12.256 14.248V25H8.512ZM33.8293 25.384C32.1013 25.384 30.4906 25.0747 28.9973 24.456C27.5253 23.8373 26.2239 22.9733 25.0933 21.864C23.9839 20.7547 23.1093 19.4533 22.4693 17.96C21.8506 16.4667 21.5413 14.8347 21.5413 13.064C21.5413 11.2933 21.8506 9.66133 22.4693 8.168C23.1093 6.65333 23.9839 5.352 25.0933 4.264C26.2026 3.15467 27.5039 2.30133 28.9973 1.704C30.4906 1.08533 32.1013 0.775999 33.8293 0.775999C35.5786 0.775999 37.1893 1.08533 38.6613 1.704C40.1546 2.30133 41.4559 3.15467 42.5653 4.264C43.6959 5.37333 44.5706 6.67467 45.1893 8.168C45.8079 9.66133 46.1173 11.2933 46.1173 13.064C46.1173 14.8347 45.7973 16.4667 45.1573 17.96C44.5386 19.4533 43.6746 20.7547 42.5653 21.864C41.4559 22.9733 40.1546 23.8373 38.6613 24.456C37.1679 25.0747 35.5573 25.384 33.8293 25.384ZM33.8293 21.928C35.0666 21.928 36.1973 21.704 37.2213 21.256C38.2666 20.808 39.1733 20.1893 39.9413 19.4C40.7093 18.5893 41.3066 17.6507 41.7333 16.584C42.1599 15.496 42.3733 14.3227 42.3733 13.064C42.3733 11.8053 42.1599 10.6427 41.7333 9.576C41.3066 8.50933 40.7093 7.57067 39.9413 6.76C39.1733 5.94933 38.2666 5.32 37.2213 4.872C36.1973 4.424 35.0666 4.2 33.8293 4.2C32.5919 4.2 31.4506 4.424 30.4053 4.872C29.3813 5.32 28.4853 5.94933 27.7173 6.76C26.9493 7.57067 26.3519 8.50933 25.9253 9.576C25.5199 10.6427 25.3173 11.8053 25.3173 13.064C25.3173 14.3227 25.5199 15.496 25.9253 16.584C26.3519 17.6507 26.9493 18.5893 27.7173 19.4C28.4853 20.1893 29.3919 20.808 30.4373 21.256C31.4826 21.704 32.6133 21.928 33.8293 21.928ZM50.339 25V1.16H54.115V21.64H64.419V25H50.339ZM78.548 25.384C76.82 25.384 75.2093 25.0747 73.716 24.456C72.244 23.8373 70.9427 22.9733 69.812 21.864C68.7027 20.7547 67.828 19.4533 67.188 17.96C66.5693 16.4667 66.26 14.8347 66.26 13.064C66.26 11.2933 66.5693 9.66133 67.188 8.168C67.828 6.65333 68.7027 5.352 69.812 4.264C70.9213 3.15467 72.2227 2.30133 73.716 1.704C75.2093 1.08533 76.82 0.775999 78.548 0.775999C80.2973 0.775999 81.908 1.08533 83.38 1.704C84.8733 2.30133 86.1747 3.15467 87.284 4.264C88.4147 5.37333 89.2893 6.67467 89.908 8.168C90.5267 9.66133 90.836 11.2933 90.836 13.064C90.836 14.8347 90.516 16.4667 89.876 17.96C89.2573 19.4533 88.3933 20.7547 87.284 21.864C86.1747 22.9733 84.8733 23.8373 83.38 24.456C81.8867 25.0747 80.276 25.384 78.548 25.384ZM78.548 21.928C79.7853 21.928 80.916 21.704 81.94 21.256C82.9853 20.808 83.892 20.1893 84.66 19.4C85.428 18.5893 86.0253 17.6507 86.452 16.584C86.8787 15.496 87.092 14.3227 87.092 13.064C87.092 11.8053 86.8787 10.6427 86.452 9.576C86.0253 8.50933 85.428 7.57067 84.66 6.76C83.892 5.94933 82.9853 5.32 81.94 4.872C80.916 4.424 79.7853 4.2 78.548 4.2C77.3107 4.2 76.1693 4.424 75.124 4.872C74.1 5.32 73.204 5.94933 72.436 6.76C71.668 7.57067 71.0707 8.50933 70.644 9.576C70.2387 10.6427 70.036 11.8053 70.036 13.064C70.036 14.3227 70.2387 15.496 70.644 16.584C71.0707 17.6507 71.668 18.5893 72.436 19.4C73.204 20.1893 74.1107 20.808 75.156 21.256C76.2013 21.704 77.332 21.928 78.548 21.928Z"
          fill="#282828"
        />
        <path
          d="M100.652 25V1.16H104.428V11.656H115.468V1.16H119.212V25H115.468V15.016H104.428V25H100.652ZM131.928 25.384C130.2 25.384 128.664 24.9893 127.32 24.2C125.997 23.3893 124.962 22.3013 124.216 20.936C123.469 19.5493 123.096 18.0027 123.096 16.296C123.096 14.5467 123.469 13 124.216 11.656C124.984 10.312 126.008 9.256 127.288 8.488C128.568 7.69867 130.018 7.304 131.64 7.304C132.941 7.304 134.104 7.528 135.128 7.976C136.152 8.424 137.016 9.04267 137.72 9.832C138.424 10.6 138.957 11.4853 139.319 12.488C139.704 13.4907 139.896 14.5573 139.896 15.688C139.896 15.9653 139.885 16.2533 139.864 16.552C139.842 16.8507 139.8 17.128 139.736 17.384H125.944V14.504H137.688L135.96 15.816C136.173 14.7707 136.098 13.8427 135.736 13.032C135.394 12.2 134.861 11.5493 134.136 11.08C133.432 10.5893 132.6 10.344 131.64 10.344C130.68 10.344 129.826 10.5893 129.08 11.08C128.333 11.5493 127.757 12.232 127.352 13.128C126.946 14.0027 126.786 15.0693 126.872 16.328C126.765 17.5013 126.925 18.5253 127.352 19.4C127.8 20.2747 128.418 20.9573 129.208 21.448C130.018 21.9387 130.936 22.184 131.96 22.184C133.005 22.184 133.89 21.9493 134.616 21.48C135.362 21.0107 135.949 20.4027 136.376 19.656L139.319 21.096C138.978 21.9067 138.445 22.6427 137.72 23.304C137.016 23.944 136.162 24.456 135.16 24.84C134.178 25.2027 133.101 25.384 131.928 25.384ZM148.452 25.384C147.279 25.384 146.244 25.1813 145.348 24.776C144.474 24.3493 143.791 23.7733 143.3 23.048C142.81 22.3013 142.564 21.4267 142.564 20.424C142.564 19.4853 142.767 18.6427 143.172 17.896C143.599 17.1493 144.25 16.52 145.124 16.008C145.999 15.496 147.098 15.1333 148.42 14.92L154.436 13.928V16.776L149.124 17.704C148.164 17.8747 147.46 18.184 147.012 18.632C146.564 19.0587 146.34 19.6133 146.34 20.296C146.34 20.9573 146.586 21.5013 147.076 21.928C147.588 22.3333 148.239 22.536 149.028 22.536C150.01 22.536 150.863 22.3227 151.588 21.896C152.335 21.4693 152.911 20.904 153.316 20.2C153.722 19.4747 153.924 18.6747 153.924 17.8V13.352C153.924 12.4987 153.604 11.8053 152.964 11.272C152.346 10.7173 151.514 10.44 150.468 10.44C149.508 10.44 148.666 10.696 147.94 11.208C147.236 11.6987 146.714 12.3387 146.372 13.128L143.364 11.624C143.684 10.7707 144.207 10.024 144.932 9.384C145.658 8.72267 146.5 8.21067 147.46 7.848C148.442 7.48533 149.476 7.304 150.564 7.304C151.93 7.304 153.135 7.56 154.18 8.072C155.247 8.584 156.068 9.29867 156.644 10.216C157.242 11.112 157.54 12.1573 157.54 13.352V25H154.084V21.864L154.82 21.96C154.415 22.664 153.892 23.272 153.252 23.784C152.634 24.296 151.919 24.6907 151.108 24.968C150.319 25.2453 149.434 25.384 148.452 25.384ZM161.768 25V0.775999H165.384V25H161.768ZM177.1 25.192C175.287 25.192 173.879 24.68 172.876 23.656C171.873 22.632 171.372 21.192 171.372 19.336V10.952H168.332V7.688H168.812C169.623 7.688 170.252 7.45333 170.7 6.984C171.148 6.51467 171.372 5.87467 171.372 5.064V3.72H174.988V7.688H178.924V10.952H174.988V19.176C174.988 19.7733 175.084 20.2853 175.276 20.712C175.468 21.1173 175.777 21.4373 176.204 21.672C176.631 21.8853 177.185 21.992 177.868 21.992C178.039 21.992 178.231 21.9813 178.444 21.96C178.657 21.9387 178.86 21.9173 179.052 21.896V25C178.753 25.0427 178.423 25.0853 178.06 25.128C177.697 25.1707 177.377 25.192 177.1 25.192ZM182.581 25V0.775999H186.197V11.08L185.621 10.632C186.047 9.544 186.73 8.72267 187.669 8.168C188.607 7.592 189.695 7.304 190.933 7.304C192.213 7.304 193.343 7.58133 194.325 8.136C195.306 8.69067 196.074 9.45867 196.629 10.44C197.183 11.4213 197.461 12.5413 197.461 13.8V25H193.877V14.792C193.877 13.9173 193.706 13.1813 193.365 12.584C193.045 11.9653 192.597 11.496 192.021 11.176C191.445 10.8347 190.783 10.664 190.037 10.664C189.311 10.664 188.65 10.8347 188.053 11.176C187.477 11.496 187.018 11.9653 186.677 12.584C186.357 13.2027 186.197 13.9387 186.197 14.792V25H182.581Z"
          fill="#00C6B2"
        />
      </svg>
    </span>
  );
};

Logo.defaultProps = defaultProps;

export default Logo;
