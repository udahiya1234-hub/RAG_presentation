
import type React from 'react';

export interface Tab {
    id: string;
    label: string;
    icon: React.FC<{ className?: string }>;
}
