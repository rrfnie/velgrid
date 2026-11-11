import React from 'react';
import { useTheme } from '../context/ThemeContext';

/**
 * Official Velgrid Logo Component
 * Seamlessly adapts between Light & Dark themes!
 * In Light Mode: White geometric structure adapts to Deep Tech Navy (#0f172a)
 * so it never blends into light/white backgrounds!
 */
export default function VelgridLogo({
  variant = 'horizontal', // 'horizontal' | 'stacked' | 'icon'
  size = 'md', // 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  theme: explicitTheme,
  className = '',
}) {
  let contextTheme = 'light';
  try {
    const themeContext = useTheme();
    contextTheme = themeContext?.theme || 'light';
  } catch (e) {
    contextTheme = 'light';
  }

  const effectiveTheme = explicitTheme || contextTheme;
  const isDark = effectiveTheme === 'dark';

  const heightMap = {
    xxs: 'h-4 sm:h-4.5',
    xs: 'h-5 sm:h-6',
    sm: 'h-7 sm:h-8',
    md: 'h-9 sm:h-10',
    lg: 'h-12 sm:h-14',
    xl: 'h-16 sm:h-20',
  };

  const currentHeight = heightMap[size] || heightMap.md;

  // Icon Only (Futuristic V Emblem)
  // Dark mode -> white & blue emblem
  // Light mode -> navy & blue emblem (anti-blend with white background)
  if (variant === 'icon') {
    const iconSrc = isDark ? '/velgrid-emblem.png' : '/velgrid-emblem-light.png';
    return (
      <img
        src={iconSrc}
        alt="Velgrid — Solusi Pembuatan Website & Aplikasi Mobile"
        className={`${currentHeight} w-auto object-contain transition-all duration-200 hover:scale-105 ${className}`}
      />
    );
  }

  // Stacked Layout (Emblem on top, VELGRID below)
  if (variant === 'stacked') {
    const src = isDark
      ? '/velgrid-logo-dark.png'
      : '/velgrid-logo-transparent.png';
    return (
      <img
        src={src}
        alt="Velgrid — Jasa Pembuatan Website & Aplikasi Mobile Berkelas"
        className={`${currentHeight} w-auto object-contain transition-opacity duration-200 hover:opacity-95 ${className}`}
      />
    );
  }

  // Horizontal Layout (Emblem on Left, VELGRID on Right)
  // Dark mode: white V structure + white VELGRID text
  // Light mode: deep navy V structure + deep navy VELGRID text + vibrant blue
  const horizSrc = isDark
    ? '/velgrid-horizontal-dark.png'
    : '/velgrid-horizontal.png';

  return (
    <div className={`inline-flex items-center ${className}`}>
      <img
        src={horizSrc}
        alt="Velgrid — Jasa Pembuatan Website & Aplikasi Mobile"
        className={`${currentHeight} w-auto object-contain transition-opacity duration-200 hover:opacity-95`}
      />
    </div>
  );
}
