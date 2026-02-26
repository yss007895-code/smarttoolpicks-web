import { batch12Content } from './guides-content-batch12';
import { newGuidesContent } from './guides-content-new';
import { guidesContentBatch2 } from './guides-content-batch2';
import { guidesContentBatch3 } from './guides-content-batch3';
import { guidesContentPhase4 } from './guides-content-phase4';
import { stpPhase4aContent } from './guides-content-stp-phase4a';
import { stpPhase4bContent } from './guides-content-stp-phase4b';

export interface ContentSection {
  heading: string;
  paragraphs: string[];
}

export const guidesContent: Record<string, ContentSection[]> = {
  ...batch12Content,
  ...newGuidesContent,
  ...guidesContentBatch2,
  ...guidesContentBatch3,
  ...guidesContentPhase4,
  ...stpPhase4aContent,
  ...stpPhase4bContent,
};
