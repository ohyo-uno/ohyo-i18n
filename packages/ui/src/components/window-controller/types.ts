/**
 * Interface for window controls.
 * If the `platform` property is not specified, the library will automatically detect
 * the operating system the app is running on and display the appropriate elements.
 */
export interface WindowControlsProps {
  /**
   * Specifies which platform's window controls to display.
   * It can be one of "windows", "macos", or "gnome".
   * If the `platform` property is not specified, the library will automatically detect
   * the operating system the app is running on and display the appropriate elements.
   */
  platform?: "windows" | "macos" | "gnome"

  /**
   * Indicates whether the window controls should be shown or hidden.
   * @default false
   */
  hide?: boolean

  /**
   * - "display": "display: none;" making them completely invisible and not taking up any space.
   * - "visibility": "visibility: hidden;" making them invisible but still occupying the same space.
   * @default "display"
   */
  hideMethod?: "display" | "visibility"

  /**
   * Justify/Snap WindowControls
   *
   * @default false, (if not defined in WindowTitlebar automatically assigned)
   */
  justify?: boolean

  /**
   * to add custom class to window controls
   */
  className?: string

  onClose?: () => void

  onMinimize?: () => void

  onMaximize?: () => void
}