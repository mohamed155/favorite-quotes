export class SettingsService {
  private altBackgtound = false;

  setBackground(isAlt: boolean) {
    this.altBackgtound = isAlt;;
  }

  isAltBackground() {
    return this.altBackgtound;
  }
}
