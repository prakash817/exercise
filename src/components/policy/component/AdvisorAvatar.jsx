const sizeClasses = {
    sm: "h-10 w-10 text-sm",
    lg: "h-16 w-16 text-xl",
};
export function AdvisorAvatar({ initials, styles, size = "sm", }) {
    return (<div className={`flex items-center justify-center rounded-full font-bold ${sizeClasses[size]}`} style={{
            backgroundColor: styles.avatarBg,
            color: styles.avatarText,
        }}>
      {initials}
    </div>);
}
