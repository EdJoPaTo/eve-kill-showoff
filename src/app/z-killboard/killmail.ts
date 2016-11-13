import { Attacker } from './attacker';
import { Item } from './item';
import { Victim } from './victim';

export class KillmailExtraZKillboardInfo {
  public hash: string;
  public totalValue: number;
  public points: number;
}

export class Killmail {
  public killID: number;
  public solarSystemID: number;
  public killTime: string;
  public moonID: number;
  public victim: Victim;
  public attackers: Attacker[];
  public items: Item[];
  public zkb: KillmailExtraZKillboardInfo;
}
