import { Link, useNavigate } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEOHead
        title="404 - 페이지를 찾을 수 없습니다 | 자료구조 학습"
        description="요청하신 페이지가 존재하지 않습니다."
      />

      <div className="not-found-page">
        <div className="not-found-content">
          <div className="not-found-code">404</div>
          <h2 className="not-found-title">페이지를 찾을 수 없습니다</h2>
          <p className="not-found-desc">
            요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
            주소를 다시 확인하시거나, 아래 버튼을 이용해 이동해 주세요.
          </p>
          <div className="not-found-actions">
            <Link to="/" className="not-found-btn primary">홈으로 이동</Link>
            <button
              className="not-found-btn secondary"
              onClick={() => navigate(-1)}
              style={{ border: 'none' }}
            >
              이전 페이지로
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
