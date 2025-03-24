// 카카오톡 JavaScript SDK 초기화
window.addEventListener('load', function() {
    // 발급받은 JavaScript 키를 사용하여 Kakao SDK 초기화
    // 실제 사용 시 YOUR_KAKAO_JAVASCRIPT_KEY 부분을 발급받은 키로 변경해야 합니다.
    Kakao.init('2ebacc62d4681a3c67e4da709f3eaf0d');
    
    // 채널 추가 버튼 생성
    // 실제 사용 시 YOUR_KAKAO_CHANNEL_ID 부분을 자신의 채널 ID로 변경해야 합니다.
    Kakao.Channel.createAddChannelButton({
        container: '#kakao-add-channel-button',
        channelPublicId: '_bnLnn',
        size: 'large',
        supportMultipleDensities: true
    });
    
    console.log('카카오톡 채널 버튼이 로드되었습니다.');
}); 