const rivraddon = require('./rivraddon');

const mockOpen = jest.fn();
const mockSend = jest.fn();
const mockSetRequestHeader = jest.fn();
const mockOnReadyStateChange = jest.fn();
const mockXHR = {
  open: mockOpen,
  send: mockSend,
  setRequestHeader: mockSetRequestHeader,
  onreadystatechange: mockOnReadyStateChange,
  readyState: 4,
  status: 200,
  responseText: 'success',
};

afterEach(() => {
  jest.clearAllMocks();
});

describe('enableAnalytics:', () => {
  it('should output console log correctly', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    rivraddon.analytics.enableAnalytics();
    expect(consoleSpy).toHaveBeenCalledWith(
      'SIMPLAEX CODE CHALLENGE LOG rivraddon analytics.enableAnalytics'
    );
  });
});

describe('trackPbjsEvent:', () => {
  const eventType = 'addAdUnits';

  it(`Given trackPbjsEvent received an event
      When the request is sent to tracker 
      Then 'success' is console logged `, () => {
    global.XMLHttpRequest = jest.fn(() => mockXHR);
    rivraddon.analytics.trackPbjsEvent({ eventType });
    mockXHR.onreadystatechange();

    const consoleSpy = jest.spyOn(console, 'log');

    expect(mockOpen).toHaveBeenCalledWith(
      'POST',
      'https://tracker.simplaex-code-challenge.com/',
      true
    );
    expect(consoleSpy).toHaveBeenCalledWith('success');
    expect(mockSend).toHaveBeenCalledWith(JSON.stringify({ eventType }));
  });
});
