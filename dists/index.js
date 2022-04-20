'use strict';

const a = 'a';

const b = 'b';

var img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAEbgAABG4B0KOyaAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAACAASURBVHic7d15lKV1fefxd9Pd9EJDi0TFSSKuqEgQWUUBEQHjAmhiMCMohhg1cTSe6IkmJhM8JidxzugMHmeERIYZFjkTBFSSIRKUEPbFgCw2i9gIhNWGrm56o7ur54/frdBWeqlbdZ/n+32e3/t1zj02LdX301XFvZ/6/b7P7wFJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkoY2KzqAANgF2Ad4ITAfWDDEx84efPywzzd7iH9/ASXXqCwE5o3wz8tiMbBDdIiO2wnYMTpEQhuBFdP82FXAM9P4uHFgbJrPuRpYN+n3VlD+Hpv/uWuBNYNfrwTWA8s2e6ye5vNrCiwA7ZsH7AccMnjsB7wEvxaSNNlaShF4AlgC3Dp43Aw8GZirF3zTad4i4I3AEcDhwP7086dfSWrLOHALcPngcTWlLGgIFoDR2wE4EHgncCRwEDAnNJEk9dsa4CrgH4G/A+6KjdMNFoDR2IHyE/5JwDuA54emkaS6LQEuAv4vcHtwlrQsADPzIuCDg8dLQpNIkrbkZuB/A+cBy2Oj5GIBmJ7XAX8CvAunviWpC54GzgROA5YGZ0nBAjCcg4A/pSzz+7mTpO7ZCHwDOBX4SWyUWL6JTc2ewJcog32SpO5bT1kROBV4LDZKjGEOg6nRTsDnKHtHewVnkSSNzmzgAOBDlEsIf0C5vLAargBs3fuBL1JO55Mk9dsPKWXg5uggbXEF4N97PuUn/j8Cdg7OIklqx+7AKZSV36soswK95grAz3sP8DXgF6KDSJLC3AG8j56fIeAlbMXOwLnABfjmL0m12xu4EfgYPf5Bubd/sSG8inJi1Kujg0iS0vk28FvAU9FBRq32AnAscA7lNq6SJG3JfZSD3+6IDjJKtW4B7AD8JaXZ+eYvSdqWlwHXUkpAb9R4FcCOlP3+j+IKiCRpauYB76W8b1wZnGUkaisAi4CLgeOjg0iSOmcW5c6vLwMuoeMHB9VUAF5AuVf0YdFBJEmdtg/wSso2cmdLQC1L4LtTlmz2jA4iSeqN7wAnAOuig0xHDQVgN+CfKNd1SpI0SpcBx9HBEtD3LYBdKMv++0YHkST10suAV1DOk9kUnGUofS4AC4F/AF4fHUSS1Gt7U4bML4sOMoy+FoBZlAN+3hYdRJJUhTcAK4Dro4NMVV8LwOeAT0SHkCRV5WjKDYTuig4yFX0cAjyeshdT6ymHkqQ4K4EDgbujg2xP3wrAq4AbKMN/kiRFuIWyJbA2Osi29GkLYB5l6G+P6CCSpKq9kHJr+b+PDrItfSoA/w2P+JUk5XAAcA+J7yDYly2AYylHMvbl7yNJ6r7lwK8AD0UH2ZI+vGHuBtxJOetfkqRMLgeOIeEhQX3YAjgLODg6hCRJW/BS4F+Bf4kOMlnXVwDeTbnkT5KkrMYoV6k9Gh1kc11eAdgFuBTYOTqIJEnbMJ9yZUCqH1i7fFjOf6Z8QiVJyu5E4M3RITbX1S2AVwM/BOZGB5EkaYpup9yddjw6CHR3C+AsSgmQJKkrXgDcSykC4bq4ArA/cBPdzC5JqttSykDgM9FBurgCcCbwiugQkiRNw67AgyS4LLBrP0XvB/wgOoQkSTNwN2UbO/RwoK5dBfCJ6ACSJM3QK4G3R4fo0grA84AHKNdTSpLUZd8DjooM0KUVgN/CN39JUj8cCbw8MkCXCsCJ0QEkSRqRWcBJ0QG64NXAj6JDSJI0QvdTbhYUMgzYlRUAf/qXJPXNi4FDop68KwXg+OgAkiQ14N1RT9yFLYAXAT+NDiFJUgN+TNDhdl1YAXhndABJkhrycsrRwK3rQgE4JjqAJEkNCvlBN3sB2AE4NDqEJEkNekvEk2afAXgtcGt0CEmSGrSacpOgVu8QmH0F4E3RASRJathC4MC2nzR7AXhjdABJklpwZNtPmL0AHBwdQJKkFrQ+75Z5BuB5wOPRISRJasEY8FxgvK0nnNPWE03DAdEBemw9cB+wavDPTw9+b3Or2PJAynJmfm71psGfk8kKYGN0CKUwB9g5OsQkz2HmP7DNGvw5k+0I7DTp9+YCiwa/3olyrXrm94s+WEy5782dbT1h5i9o6wMRPbYauAz4PnAlcBctT5tK6rT5wN6UK7MOAY6jrNJqtA6hxQKQ2bcpPyn6mN5jnPKmfyLPNnlJGoXZwBHAV4BHiX+968vj60N8DXrtbuK/GF18rKT8R/nK4T/lkjS0ecCHKLdsj3796/rjqiE/9700l7JEHf3F6NJjJfCXwC9M4/MtSTM1i3Kk7S3Evx529bF06M96D72S+C9EVx4bga/iG7+kHGYDvwssI/71sWuPZdP4fPfOscR/IbrwuBXPSpCU027AGZR5pOjXyq481k7rM90zHyD+C5H9cQbl8h1Jyuw44GfEv2Z25TF7ep/m4WU9CbC1T0AHrQTeC3wEL+WTlN93gP2Aa6KDdMTCtp4oawHIfD5BpMcoN0j62+ggkjSEByiXDZ4enKMLWnv/swB0x/3A4ZQJW0nqmg2U4cDPRgdJrrX35awFwC2An/djyp0R74kOIkkz9EXg47R45n3HOAMQHSCRh4FjBv8rSX3wVeBj0SGSqr4AuAVQjAHvwMMhJPXP6cBfRYdIyC2A6AAJrKa8+d8aHUSSGvLHwHnRIZKpfgXAAgAfxctmJPXbJuAU4KboIIlUXwBq3wL4G+Cc6BCS1IJngJOBNdFBkqi+ANS8AnA/8AfRISSpRUso2wFyBqDaAjCxHPZ0dBBJatlXgCujQyRQ/QpArVsA5wNXRIeQpADjwCfwfABXAKIDBFgNfCY6hCQFug24IDpEMI8Cjg4Q4H8CD0WHkKRgf0o5NrhWrgBEB2jZWuDL0SEkKYF7gYujQwSqvgDU5hzgkegQkpTEadEBAlU/BDgrOkDLzowOIEmJXAPcGB0iiAUgOkCLbgduiA4hScnU+oORBSA6QIu+Hh1AkhK6gHJKYG2qnwGopQCsBc6NDiFJCT0FXB4dIkD1lwHWUgC+CzwZHUKSkqrxagBXAKIDtOSb0QEkKbGrowMEsABEB2jJJdEBJCmxu4HHo0P0lQUg1lh0AElKbBPw0+gQfWUBkCRlVtuxwK29/1kAJEmZrY8O0FcWAElSZhaAhlgAJEmZ1VYA3AKIDiBJSqG2AtAaC4AkKbPaCoArANEBJEkp1FYAWmMBkCRlZgFoiAVAkpSZ5wA0xAIgScpsU3SAvrIASJIyq60AuAIQHUCSlEJtBaA1FgBJUmYWgIZYACRJmY1HB2iZWwDRASRJKbgC0BALgCQps9oKgCsA0QEkSSnUVgBaYwGQJGVmAWiIBUCSlJlDgA2xAEiSMnMFoCEWAElSZhaAhlgAJEmZ1VYA3AKIDiBJSqG2GYDWWAAkSZm5AtAQC4AkKbPaCkBrLACSpMwsAA3JWgAkSYL6ZgDcAogOIElKwRWAhsyJDiD1yAHAycDuwHOA+cCCwa9nAYuAuS3m2QFY3OLzAawF1rT8nGOUnxJXDZ5/bJBhDLgSOAvY2HImjU5tBaC1H4AtANJonEh5o2nzDT6j+YNHm3bdxv93EvBe4OiWsmj0aisArXELQBqNw/HNP6ujogNoRiwADclaACRJgvoKQPVDgJIkQX1XAbTGAiBJyswVgIZkLQDOAEiS1KCsBUCSJDXIAiBJUh5uAUQHkCSpz7IWAEmSalT9CoAkSWqQBUCSpAplLQDOAEiSauQWgCRJao4FQJKkClkAJEnKo/otAGcAJElqUNYCIElSjapfAZAkSQ2yAEiSMqvtdsCtyVoAnAGQJNXILQBJktQcC4AkSXlUvwLgFoAkSQ3KWgAkSVKDLACSJOVR/RaAJElqUNYC4AyAJKlGrgBIkqTmWAAkSaqQBUCSpDyq3wJwBkCSpAZlLQCSJNWo+hUASZLUIAuAJEkVyloAnAGQJNXILQBJktQcC4AkSXlUvwLgFoAkSQ3KWgAkSVKDLACSJOVR/RaAJElqUNYC4AyAJEkNyloAJEmqkVsAkiSpORYASZLyqH4FwBkASZIalLUASJKkBlkAJEmZbYoO0LLqtwAkSVKDshYAZwAkSTVyBUCSJDXHAiBJUoWyFgC3ACRJNXILQJIkNccCIElSHq4ASJKk5mQtAM4ASJLUoKwFQJKkGrkFIEmSmmMBkCQpj+pXAJwBkCSpQVkLgCRJUN/dAFtjAZAkKY/qtwAkSVKDshYAZwAkSWpQ1gIgSVKN3AKQJEnNyVoA3AKQJNXIFQBJktQcC4AkSRWyAEiSlEf1WwDOAEiS1KCsBUCSpBpVvwIgSZIaZAGQJKlCWQuAMwCSpBq5BSBJEt4OuDEWAEmS8nAFQJIkNSdrAXAGQJKkBmUtAJIk1cgtAEmS1JysBcAtAElSjVwBkCRJzbEASJJUIQuAJEl5VL8F4AyAJEkNyloAJElSgywAkiTlUf0WgCRJalDWAuAMgCSpRq4ASJKEtwNujAVAkqQKWQAkScqj+i0AZwAkSWpQ1gIgSVKNql8BkCRJDcpaANwCkCSpQVkLgCRJNXILQJIkNccCIElSHtWvADgDIElSg7IWAI9+lCRBfe8HrgBEB5AkpeD7QUOyFgBJktQgC4AkKbPatgBaYwGQJKlCFgBJUmbOADTEAiBJUoUsAJIkVShrAXDoQ5KkBmUtAJIkgTMAjZkTHUBVOgQ4BtgH2A14DrAzsJhnS+mswe9LoxC9qrgWWDPkx6wDVg9+PQaMD/6ch4AbgP9O/N9LHWYBUNt+GbgaV59Ul/mDx6i8F1gF/PUI/0xVJuuLsK22vxaR9/tO6pLjowOo23whVtueiA4g9UQt/y05A9AQC4Da9hTwYHQIqeOuAz4dHULdZgFQ2zZShv/OjQ4iddTXgCOAnwXnUMdlLQDOAPTbcuD9wHvwRUyaqjHgfcDvAc8EZ1EPZC0AqsOFwN7Ad6KDSMldQflv5fzoIAGcAWiIBUDRHqNMM58MPB2cRcpmA/B54GjK9f/SyFgAlMXZlNmAf44OIiWxFHgTcCpldkYaKQuAMlkKHAl8Fvc4VbdzKIX42ugg6q+sBcAhwHptBL4IHAD8MDiL1LaJQb8P4JaYGpa1AEi3A68Hvkw5A13quyuAX6HOQb9tcQiwIRYAZbYW+BRwGHBfcBapKWsp215H4SFZapEFQF1wLbA/8H+ig0gjdgtlu+uLuNKllmUtAM4AaLIx4IPAO4BHYqNIMzYOfIWyzXVncBZVKmsBkLbm/wH7At+ODiJN0/3Am4Hfx6tdFMgCoC56HHgX5fCglcFZpGGcQxn087wLhbMAqMvOpryYXhkdRNqOxyknXnp5n9LIWgCcAdBU/ZSynPpJYF1wFmlLLgReg/e8mC4vA2xI1gIgDWMTcBrlSoFbgrNIE1YAH8G7XiopC4D65E7gYMrNUzw7XZGuAfYD/jo6iLQ1FgD1zXrKzVMOBe6NjaIKTRzqczgeXqXkshYAZwA0U9dTLhf8Cn4/qR0Tx1d7qI86IWsBkEZhNeVa67cBDwdnUX95A6tmOQTYEAuAavBdyhT2edFB1DvewlqdZQFQLZYDJwEnAE8GZ1E/nAPsg4f6qKOyFgD3bNWUC4DXAd+PDqLOegwP9VEPZC0AUpMeoNx69SPAquAs6pYLgb3xUJ82OQPQEAuAarWJco32gcDNwVmUn4f6qHcsAKrdEuAQyhDX+uAsyslDfdRLFgAJNlAu4zoUuDs4i/LwUB/1WtYC4BCgItxIGRD0IBd5qE8ezgA0JGsBkKKsofzU91bgoeAsap+H+qgaFgBpyy6nTHu771uPpZRbS3uoj6pgAZC2bowy+f0bwLLgLGrWxKE+V0UHkdqStQA4A6BMvkk5SviS6CAauceA4/BQH1UoawGQspl4ozgZ3yj6YuJQH4tdbg4BNsQCIA3nbFwq7joP9ZGwAEjT4bBYd11DudTT4U5VL2sBcAZA2Xm5WLdsfqjPT4KzSClkLQBSV3hgTH5+jbrNGYCGWACkmZv46fIwPDI2E1dppG2wAEijcy3eNCYL5zSk7chaAJwBUFdNTJi/HXgkOEutPNRHmoKsBUDqukuBfYFvRQepiIf69JMzAA2xAEjNeRx4N3ACsDw4S995qI80JAuA1LwLKLMB/xwdpIeWA+/HQ32koWUtAM4AqG+WAkcAnwTWxUbpje9R9vrPjQ4idVHWAiD10SbgNGB/4F+Cs3TZxGWXxwAPBmeROssCILXvTsrBNJ+nXKuuqbsdOBgP9amJQ4ANsQBIMdYDpwJvBO6JjdIJmx/qc1twFqlJrRUeC4AU6wbKgOAZOPuyNfcCh+KhPtJIZS0AvhCqJquAjwK/CvxrcJZMNlFOVdwPuD44i9Q7WQuAVKPLKNeyO9VeDvU5nnKqoof61M0ZgIZYAKRcJq5rPwF4MjhLlAuA1+ChPlKjLABSThNvgn8fHaRFY5Sf+E8AlgVnkXovawFwBkCCR4FjKW+Kq4KzNO0fKdsf3klRaknWAiCpmBiE2we4OjhLE9ZQpvt/FXgoOItycgagIRYAqRt+Qv/ub38j8Do81EcKYQGQumMD5c3yQLp9GM7E3+NQ4O7gLFK1shYAZwCkrbuN7h6Hu4RyDPJnKachSgqStQBI2raJG+IcDtwXnGUqJmYZDgB+EJxFEhYAqeuuoZyUl3l6/gHgLZSrGVYHZ1H3OATYEAuA1H0rKG+uvw78LDjLZBcA+wJXRAeR9POyFgBnAKThXUQ5POjb0UGAJ4Bfoxzq81RwFklbkLUASJqex4F3AScDK4My/APlp/6Lg55f0hRYAKR+OptyeNCVLT7nSspWxNuAh1t8XvWbMwANsQBI/XU/5fCgTwLrGn6u68g/jChpM1kLgDMA0mhsAk4D9gduaeDPXw98HjgM+HEDf76khsyJDiCN2CJg7hT+vcVsvwDPAp4z5PNP52Pa+vj/BXwKePEM/vzNjQOnU5b7f3sL//8qZnZs8XKm/8PABoafgVg5+LhteZrtH2A007+31AoLgNo0m7IcvT+wGzCP8oa9aPDrxdv42AXA/KYDaig7AB+PDtFRk0vCMzx7x8f1lKIx+debl5oHgT8ENjYbMwVnABpiAVCbfgf4r9EhpAR2Gjxm4mbg/BFkUaWcAVCb9osOIPXIEdEB1G1ZC4D66YXRAaQeeWl0AHWbBUBtmh0dQOqRXaIDqNssAGqT32/S6CyMDtAShwAb4guy2uT3mzQ6Mx0iVOWyviA7BNhPbgFIo1PLCoAakrUAqJ/8fpNGZ8foAOo2X5DVJr/fpNGpZaXUGYCG+IKsNrkFIElJZC0AtTTb2mT9fpO6yNdJzYgvyGqT32+SlIQvyGqT32/S6NSyAuAMQEN8QVab/H6TpCSyviDX0mxrMx4dQOoRXyc1I1kLgPrJAiCNzvroAOo2C4DatDE6gNQjz0QHULdZANQmC4A0OrWsADgE2JCsBcC9rX5yC0AaHVcANCNZC4D6yRUAaXRqWQFQQywAapMrANLouAKgGbEAqE2uAEijU8sKgDMADclaAJwB6CcLgDQ6rgBoRrIWAPWTWwDS6NSyAqCGWADUpg3RAaQeWRcdQN1mAVCbHo4OIPXIA9EBWuIMQEMsAGrTzdEBpB65ITqAum1OdICtcAiwn84G5gF7AbsPfm8RMHfw6/nAgsGvZwO7TPr4hYOPr8UCyudEmuxS4PzoEOq2rAVA/bQROD06hCTJLQBJkqqUtQC4BSBJqlFrQ49ZC4AkSVDfVQCt/QCctQC4AiBJUoMsAJIkVcgCIEnKrLYtgNZYACRJqpAFQJKkClkAJEmqkAVAkqQKZS0AkiRBfUOAngMQHUCSpAAWgOgAkiQFsABEB5AkKYAFIDqAJCkFZwAaYgGQJCkPC0B0AEmSAlgAogNIkhTAAhAdQJKUgjMADbEASJKUR/UFQJKkGlVfAFwBkCTVyAIQHUCSlEJtMwCtsQBIkpSHKwDRASRJCmABiA4gSVIAC0B0gJZk/fxLkmJYAKIDtOSw6ACSlNyLowO0zAIQHaAl/zE6gCQl9kvAW6JDtMwCEB2gJb8B7BgdQpKSOgWYHR2iZRaA6AAteS5wbHQISUpoNqUAqCFZC0BNPhIdQJISOg7YIzpEgPG2nihrAahlBQDgKGDP6BCSlMzHogMEcQsgOkCLZgEfig4hSYm8GjgyOkSQ6gtAa0sgSZwC7BwdQpKS+EO8B0DjshaA2uwGfCo6hCQlsCdwUnSIQM4ARAcI8Clg9+gQkhTsC8Cc6BCB3AKIDhBgEfC56BCSFOh1wHuiQ9TCApDLh4FXRYeQpACzgdPJ+77UlupXADZGBwiyI3AeMDc6iCS17OPAQdEhErAARAcItB9uBUiqyx6UvX85BFh1AYBSAA6ODiFJLZgLnEuZgxJsaOuJshaA1j4BSc0BvgG8IDqIJDXsS8Ch0SESqb4A1L4CAPBS4BJgp+ggktSQ91H2/vUsC0B0gCQOBP6Wuq+JldRPRwNnRodIyAIQHSCRtwNfxxIgqT/eBHwLmB8dJKHW3v8sAN1wMnARsDA6iCTN0BGU7U1fz7bMFYDoAAkdC1wBPC86iCRN08nAd/HmZ9tSfQGo/SqArTkIuBp4bXQQSRrCDpTr/M+iHHimrau+ANR6FPBU7AncBJxKOTpTkjLbA/ge8Cd4i9+pqL4AuAKwbXOBPwMuB14UnEWStmQWcApwG2XfX1NTfQFwBmBqjgCWAH8O7BIbRZL+zaHAdZTL/HxtGs766ADRfodyQwQfU388DvwnvJGQpDh7A98k/vWwy4//MPRnvWfeSvwXoauPpcBn8GoBSe05HPg7yvxW9Gtglx9rybsy35oXEf+F6PpjLXA28PohP/eSNBWLgd8Fbib+9a4vj3uG+grMUNaJzFnAGF4rOip3UW4u9A3gvuAskrppHrAX5RS/o4E3AwtCE/XPpZTTX1uRtQAA3Eg5C1+jdR1we3SIrVgFPBMdIrm1wJroENqmxcQu4y6kvFlP1Y78+5uO7Trpn38JeDkeSd60LwGfbuvJMn8xl2ABaMIhg4ckKZc723yyzMMGP4oOIElSi+5o88kyF4DbogNIktSSNcAP23zCzAXgWjwQSJJUhxtoeQYqcwEYo+U2JElSkGvafsLMBQDgyugAkiS1wAIwiQVAktR345RLtFuVvQBchbcGliT12x3A8rafNHsBeJK8h9ZIkjQKV0Q8afYCAHBZdABJkhp0UcSTZj4KeMLBwPXRISRJasBjwC8ScNl7F1YAbgQeiA4hSVIDLiLozJsuFIBNwMXRISRJasCFUU/chQIAgZ8gSZIasozAy927UgCuAR6NDiFJ0gh9C9gQ9eRdKQDjuAogSeqXMyOfvAtXAUzYB+8NIEnqh9uA10YG6MoKAJRP1o3RISRJGoEzogPMjg4wpI3A8dEhJEmagWXAB4H1kSG6tAIAcC7wYHQISZJm4KvAqugQXVsBGKdkPiY6iCRJ07AKOBFYHR2kaysAAP8DeCg6hCRJ0/Bl4InoENC9FQAo10yuBI6LDiJJ0hB+BvwmsC46CHRzBQDgLMr9kyVJ6oovACuiQ0zo0jkAkx0JXE63/w6SpDrcC+wNPBMdZEIXtwAmLAVeAuwbHUSSpO34TUoJSKPrPz3vBvwIeH50EEmStuI84KToEJN1eQUAYA3lioD3RAeRJGkLnqIMrYdf9z9Z1wsAlGHAV1DuFSBJUiYfBq6LDrElXd8CmLCYcqOgPaKDSJI0cAFwQnSIrelLAQA4DPg+MCc6iCSpevdThtTHgnNsVR+2ACY8QDla0WOCJUmR1lNuXJdq6n+yPhUAgOuBvYDXRAeRJFXrk8CF0SG2p09bABN2pgxcWAIkSW07CzglOsRU9LEAALyYshrwguAckqR63AC8iSRn/W9PV+8FsD33A+8k4XWXkqReug94Fx1584f+FgCAm4H3Axujg0iSeu0R4Gjg0eggw+jbEOBkd1HuGXA8/d3ukCTFGaO8+d8VHWRYfS8AALcBy4C3RweRJPXKcuBtlBXnzqmhAADcRPlCvRVXAiRJM7eM8pP/TdFBpquWAgBlOvM+yk0Z+jz7IElq1uPAUcCt0UFmoqYCAGU74F7gWDwyWJI0vHspb/5LooPMVK3L4YcAF+M5AZKkqbuWcqnfE9FBRqHWpfDrKCXgjuggkqROOAc4kp68+UO9BQDK5YEHAX8THUSSlNY6ytn+H6BDh/xMRW0zAJNtAC6hlIFjgB1j40iSEvkp5VTZ9Df2mY6aVwA2dzZwMB2f6JQkjcw3gNdS7ivTS7WvAGzuCeBMYBNwGJYjSarRI8DJwF/QsyX/yWq9CmB73kCZDdgrOogkqRWbgDOAzwArgrO0wgKwdXOB3wP+HFgUnEWS1JyfAB8GvhcdpE1uAWzdOOX0wPOBFwKvwcIkSX2yAvg8ZcL/nuAsrfMNber2B/6KcgKUJKm71lK2eb9Aj67rH5YFYHhvAD5NucWwg4KS1B2rKW/8/wV4ODhLOAvA9O0JfAw4EdgtOIskaet+DHwNOAt4KjhLGhaAmZtHORv6A5TtAQ8TkqR4y4FvUo7wvZoy16XNWABGazHl1Kh3U+4TvUtsHEmqyhLg0sHjKnp+Hf9MWQCaM4dyw6GjKccMH4BXXUjSKD0NXMGzb/r3h6bpGAtAe3YF3gy8BTgQ2BtYEJpIkrrlUeA2ypL+9ymXam8ITdRhFoA4s4FXAC8Dnjt47LrZr3fh2YKwiHIwEYN/h8E/TxxQtACY33xkSRra08D6wa+XU07c28izp+2to0znT/y7TwFPTvrfxyi3b6/2kr0mWADqNpvpzynMAxZO82N3wmFJabo2f0Md1uZvtsMaB8am+bGSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSk/2flAAAAEJJREFUJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJKmj/j+MKcItbWazuQAAAABJRU5ErkJggg==";

console.log(a, b);
console.log(img);
console.log('development');
console.log('env');
